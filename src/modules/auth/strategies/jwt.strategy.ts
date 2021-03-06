import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt, VerifiedCallback } from "passport-jwt";
import { JwtPayload } from "../auth.interface";
import { UserService } from "../../../modules/user/user.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly userService: UserService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'sigmar'
        })
    };

    async validate(payload: JwtPayload) {
        console.log('payload', payload)
        const { name } = payload;
        const entity = await this.userService.findByName(name);

        if (!entity) {
            throw new UnauthorizedException('没找到用户。');
        };

        return entity;
    };
}