import { injectable } from 'inversify';
import { UserLoginDto } from './dto/user-login.dto';
import { UserRegisterDto } from './dto/user-register.dto';
import { User } from './user.entity';
import { IUsersService } from './users.service.interface';

@injectable()
export class UsersService implements IUsersService {
	async createUser({ email, name, password }: UserRegisterDto): Promise<User | null> {
		const newUser = new User(email, name);
		await newUser.setPassword(password);
		// Проверка пользователя
		// Если он есть - возвращаем null
		// Если нет - создаём
		return null;
	}
	async validateUser(dso: UserLoginDto): Promise<boolean> {
		return true;
	}
}
