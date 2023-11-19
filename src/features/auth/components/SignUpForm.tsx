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
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { AuthContext } from "./context/AuthContext";

const schema = z.object({
  username: z.string().min(4, "Username must consist at least 4 characters"),
  email: z.string().email("Invalid email"),
  password: z
    .string()
    .min(8)
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>?]).*$/,
      "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 symbol"
    ),
});

type SignUpData = z.infer<typeof schema>;

const SignUpForm = () => {
  const { authStore } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpData>({
    resolver: zodResolver(schema),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <form
        onSubmit={handleSubmit(async (data) => {
          setIsLoading(true);
          return authStore
            .signUp({
              username: data.username,
              email: data.email,
              password: data.password,
            })
            .then(() => setIsLoading(false));
        })}
      >
        <FormControl
          borderTop="1px"
          borderColor={"gray.100"}
          pt={7}
          isInvalid={errors.username ? true : false}
        >
          <FormLabel htmlFor="username">Username</FormLabel>
          <Input
            id="username"
            placeholder="username"
            {...register("username")}
          />
          <FormErrorMessage>{errors?.username?.message}</FormErrorMessage>
        </FormControl>

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
              placeholder="password"
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
            colorScheme={"purple"}
            textColor={"white"}
            isLoading={isLoading}
            my={6}
            type="submit"
            w="100%"
            h={12}
          >
            Sign up
          </Button>
        </Center>
      </form>
    </>
  );
};

export default SignUpForm;
