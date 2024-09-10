import { Request, Response, NextFunction } from 'express'; // Pastikan tipe Request dan Response diimpor

// Middleware untuk logging request
const logRequest = (req: Request, res: Response, next: NextFunction): void => {
    const { method, url } = req;
    const timestamp = new Date().toISOString(); // Tambahkan timestamp untuk log lebih informatif
    console.log(`[${timestamp}] ${method} request to ${url}`);
    next(); // Lanjutkan ke middleware berikutnya atau route handler
}

export { logRequest };
