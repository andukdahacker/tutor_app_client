import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSnapshot } from "valtio";
import * as z from "zod";
import loginStore from "./login.store";

const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z
    .string()
    .min(8)
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>?]).*$/,
      "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 symbol"
    ),
});

type SignInData = z.infer<typeof schema>;

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInData>({
    resolver: zodResolver(schema),
  });
  const loginState = useSnapshot(loginStore);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Center>
      <form
        onSubmit={handleSubmit((data) =>
          loginStore.logIn({ email: data.email, password: data.password })
        )}
      >
        <FormControl isInvalid={errors.email ? true : false} mt={2}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input id="email" placeholder="email" {...register("email")} />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.password ? true : false} mt={2}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <InputGroup>
            <Input
              type={showPassword ? "text" : "password"}
              id="password"
              {...register("password")}
            />
            <IconButton
              aria-label="Toggle hide password"
              icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
              onClick={() => setShowPassword(!showPassword)}
              ml={"2"}
            />
          </InputGroup>
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        </FormControl>

        <Center>
          <Button
            colorScheme={"cyan"}
            textColor={"white"}
            isLoading={loginState.isLoading}
            mt="4"
            type="submit"
          >
            Sign In
          </Button>
        </Center>
      </form>
    </Center>
  );
};

export default LoginForm;
