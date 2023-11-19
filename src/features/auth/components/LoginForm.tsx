import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Button,
  Center,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  Text,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { AuthContext } from "./context/AuthContext";

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
  const { authStore } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInData>({
    resolver: zodResolver(schema),
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <form
        onSubmit={handleSubmit(async (data) => {
          setIsLoading(true);
          return await authStore
            .logIn({ email: data.email, password: data.password })
            .then(() => setIsLoading(false));
        })}
      >
        <FormControl
          isInvalid={errors.email ? true : false}
          py={7}
          borderTop="1px"
          borderColor={"gray.100"}
        >
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

        <Flex justifyContent={"space-between"} mt="5" mb="30px">
          <Checkbox
            checked={isChecked}
            onClick={() => setIsChecked(!isChecked)}
          >
            Remember me
          </Checkbox>
          <Text>Forgot password?</Text>
        </Flex>

        <Center>
          <Button
            w="100%"
            h={12}
            colorScheme={"purple"}
            isLoading={isLoading}
            my="4"
            type="submit"
          >
            Log In
          </Button>
        </Center>
      </form>
    </>
  );
};

export default LoginForm;
