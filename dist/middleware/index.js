// Middleware untuk logging request
const logRequest = (req, res, next) => {
    const { method, url } = req;
    const timestamp = new Date().toISOString(); // Tambahkan timestamp untuk log lebih informatif
    console.log(`[${timestamp}] ${method} request to ${url}`);
    next(); // Lanjutkan ke middleware berikutnya atau route handler
};
export { logRequest };
//# sourceMappingURL=index.js.map