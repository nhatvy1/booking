import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { UserModule } from '../user/user.module'
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt'
import { JWT_EXPIRES, JWT_SECRET } from 'src/utils/constant'
import { AccessTokenStrategy } from 'src/strategies/access-token.strategy'
import { RefreshTokenStrategy } from 'src/strategies/refresh-token.strategy'

@Module({
  imports: [
    UserModule,
    JwtModule.registerAsync({
      useFactory: (): JwtModuleOptions => ({
        secret: JWT_SECRET,
        signOptions: {
          expiresIn: JWT_EXPIRES,
        },
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, AccessTokenStrategy, RefreshTokenStrategy],
})
export class AuthModule {}
