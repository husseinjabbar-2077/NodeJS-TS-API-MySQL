import { Request, Response, NextFunction } from 'express';
const PORT_APP = 3000;

const validateApiKey = (req: Request, res: Response, next: NextFunction): void => {
    const apiKey = req.headers['x-api-key'] as string | undefined;
    if (apiKey && apiKey === "Rtx2080ti##0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx") {
        next();
    } else {
        res.status(401).json({ error: 'Invalid API key' });
    }
};

export {
    validateApiKey,
    PORT_APP
};
