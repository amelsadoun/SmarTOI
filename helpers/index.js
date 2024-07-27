import * as SQLite from "expo-sqlite";
//import publishMessage from "./hard/hardpub";

// Open or create the database
const db = SQLite.openDatabaseSync('devices.db');

// Initialize database table
export const init = async () => {
  try {
    // Open the database
    await db.execAsync(`
      PRAGMA journal_mode = WAL;
      CREATE TABLE IF NOT EXISTS devices (
        id INTEGER PRIMARY KEY NOT NULL,
        deviceName TEXT NOT NULL,
        deviceType TEXT NOT NULL,
        deviceStatus TEXT NOT NULL
      );
    `);
    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
  }
};

export const addDevice = async (deviceName, deviceType, deviceStatus) => {
  try {
    await db.runAsync(
      'INSERT INTO devices (deviceName, deviceType, deviceStatus) VALUES (?, ?, ?)',
      deviceName,
      deviceType,
      deviceStatus
    );
    console.log('Device added successfully');
  } catch (error) {
    console.error('Error adding device:', error);
  }
};

// Fetch all devices
export const fetchDevices = async () => {
  try {
    const result = await db.getAllAsync('SELECT * FROM devices');
    return result;
  } catch (error) {
    console.error('Error fetching devices:', error);
    return [];
  }
};

// Delete a device
export const deleteDevice = async (id) => {
  try {
    await db.runAsync('DELETE FROM devices WHERE id = ?', id);
    console.log('Device deleted successfully');
  } catch (error) {
    console.error('Error deleting device:', error);
  }
};


// Remove all devices
const removeAllDevices = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM devices",
        [],
        () => resolve(),
        (_, error) => reject(error)
      );
    });
  });
};

// Export functions
