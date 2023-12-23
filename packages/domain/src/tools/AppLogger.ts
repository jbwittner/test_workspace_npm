export type LogInfo = (data: string) => void;
export type LogWarn = (data: string) => void;
export type LogError = (data: string) => void;

export interface AppLogger {
    info: LogInfo
    warn: LogWarn
    error: LogError
}