import postgres from 'postgres'
import { DbConfig } from '../config';

export function getDatabase (config: DbConfig) {
  return postgres(config)
}
