import postgres from 'postgres'
import { config } from '../config';

export const db = postgres(config.db);
