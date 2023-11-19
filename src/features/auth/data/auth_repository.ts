import client from "../../../shared/data/client";
import { Result } from "../../../shared/data/result";
import { User } from "./domain/entities";
import { LoginInput, SignUpInput } from "./domain/inputs";
import { LoginResponse, RefreshTokenResponse } from "./domain/response";

class AuthRepository {
  static async signUp(input: SignUpInput): Promise<Result<User>> {
    try {
      const response = await client.POST("/auth/sign-up", {
        body: {
          ...input,
        },
      });

      if (response.error) {
        return {
          ok: false,
          error: new Error(response.error.message),
        };
      }

      return {
        ok: true,
        value: response.data,
      };
    } catch (error) {
      console.log(error);
      return {
        ok: false,
        error: new Error(),
      };
    }
  }
  static async logOut(): Promise<Result<string>> {
    try {
      const response = await client.POST("/auth/logOut");
      if (response.response.ok) {
        return {
          ok: true,
        };
      }

      return {
        ok: false,
        error: new Error(response.response.statusText),
      };
    } catch (error) {
      return {
        ok: false,
        error: new Error(""),
      };
    }
  }
  static async login(input: LoginInput): Promise<Result<LoginResponse>> {
    try {
      const response = await client.POST("/auth/login", {
        body: {
          email: input.email,
          password: input.password,
        },
      });

      if (response.data) {
        return {
          ok: true,
          value: response.data,
        };
      }

      return {
        ok: false,
        error: new Error(response.error.message),
      };
    } catch (error) {
      console.log(error);
      return {
        ok: false,
        error: new Error(""),
      };
    }
  }

  static async refreshAccessToken(): Promise<Result<RefreshTokenResponse>> {
    try {
      const response = await client.POST("/auth/refreshToken");

      return {
        ok: true,
        value: response.data,
      };
    } catch (error) {
      console.log(error);
      return {
        ok: false,
        error: new Error(""),
      };
    }
  }

  static async me(): Promise<Result<User>> {
    try {
      const response = await client.GET("/auth/me");

      if (response.error) {
        return {
          ok: false,
          error: new Error(response.error.message),
        };
      }

      return {
        ok: true,
        value: response.data,
      };
    } catch (error) {
      return {
        ok: false,
        error: new Error(""),
      };
    }
  }
}

export default AuthRepository;
