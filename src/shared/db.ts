// src/shared/db.ts
import { type DBSchema, type IDBPDatabase, openDB } from "idb";

interface PdfRecord {
    id: string;
    fileName: string;
    date: Date;
    outputBlob: Blob;
}

interface FluentPdfDB extends DBSchema {
    records: {
        key: string;
        value: PdfRecord;
    };
}

const DB_NAME = "speakflow_v6"; // Legacy name preservation
const STORE_NAME = "records";

export class DatabaseManager {
    private dbPromise: Promise<IDBPDatabase<FluentPdfDB>>;

    constructor() {
        this.dbPromise = openDB<FluentPdfDB>(DB_NAME, 1, {
            upgrade(db) {
                if (!db.objectStoreNames.contains(STORE_NAME)) {
                    db.createObjectStore(STORE_NAME, { keyPath: "id" });
                }
            },
        });
    }

    async saveRecord(file: File, blob: Blob): Promise<void> {
        const db = await this.dbPromise;
        await db.put(STORE_NAME, {
            id: `${file.name}_${file.size}`,
            fileName: file.name,
            date: new Date(),
            outputBlob: blob,
        });
    }

    async getRecord(file: File): Promise<PdfRecord | undefined> {
        const db = await this.dbPromise;
        return await db.get(STORE_NAME, `${file.name}_${file.size}`);
    }

    async getRecordById(id: string): Promise<PdfRecord | undefined> {
        const db = await this.dbPromise;
        return await db.get(STORE_NAME, id);
    }

    async getAllRecords(): Promise<PdfRecord[]> {
        const db = await this.dbPromise;
        return await db.getAll(STORE_NAME);
    }

    async deleteRecord(id: string): Promise<void> {
        const db = await this.dbPromise;
        await db.delete(STORE_NAME, id);
    }
}

export const dbManager = new DatabaseManager();
