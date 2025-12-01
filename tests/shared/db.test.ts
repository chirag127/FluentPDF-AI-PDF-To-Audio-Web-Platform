import { DatabaseManager } from "@/shared/db";
import { beforeEach, describe, expect, it, vi } from "vitest";
import "fake-indexeddb/auto"; // Implicitly used by idb if available, but let's mock if not.

// Mocking idb since we are in a node env without real indexedDB usually,
// but happy-dom might support it partially.
// However, the cleanest way is to verify the wrapper logic calls idb methods.

// Ideally we use vitest-indexeddb or similar, but for now we trust the IDB logic
// as it's a direct wrapper.
// We will mock the `idb` module to ensure our manager calls it correctly.

vi.mock("idb", () => {
    return {
        openDB: vi.fn().mockResolvedValue({
            put: vi.fn(),
            get: vi.fn().mockImplementation((store, key) => {
                if (key === "test_100") return { fileName: "test" };
                return undefined;
            }),
            getAll: vi.fn().mockResolvedValue([]),
            delete: vi.fn(),
            objectStoreNames: {
                contains: vi.fn().mockReturnValue(false),
            },
            createObjectStore: vi.fn(),
        }),
    };
});

describe("DatabaseManager", () => {
    let dbManager: DatabaseManager;

    beforeEach(() => {
        dbManager = new DatabaseManager();
    });

    it("should save a record", async () => {
        const file = new File(["content"], "test.pdf");
        const blob = new Blob(["pdf"]);
        await expect(dbManager.saveRecord(file, blob)).resolves.not.toThrow();
    });

    it("should retrieve a record", async () => {
        const file = { name: "test", size: 100 } as File; // Mock File object
        const record = await dbManager.getRecord(file);
        expect(record).toEqual({ fileName: "test" });
    });
});
