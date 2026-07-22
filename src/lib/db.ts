import Database from 'better-sqlite3';
import path from 'path';

// Define the path to the database file in the root of the project
const dbPath = path.resolve(process.cwd(), 'aurevia-cms.db');

// Initialize the database (creates it if it doesn't exist)
const db = new Database(dbPath, { verbose: console.log });

// Enable WAL mode for better performance with concurrent reads/writes
db.pragma('journal_mode = WAL');

export default db;
