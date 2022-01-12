import { IControllerRoute } from './../common/route.interface';
import { LoggerService } from './../logger/logger.service';
import { BaseController } from "../common/base.controller";
import { Response, Request, NextFunction } from 'express';


export class UserController extends BaseController {
    constructor(logger: LoggerService) {
        super(logger);
        this.bindRoutes([
            {
                path: '/login',
                method: 'post',
                func: this.login
            },
            {
                path: '/register',
                method: 'post',
                func: this.register
            }
        ])
    }

    login(req: Request, res: Response, next: NextFunction) {
        this.ok(res, 'login');
    }

    register(req: Request, res: Response, next: NextFunction) {
        this.ok(res, 'register');
    }   
}