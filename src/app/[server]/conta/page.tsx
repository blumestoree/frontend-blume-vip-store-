import LoginForm from "./sections/loginForm";
import RegisterForm from "./sections/registerForm";

export default async function Account() {
	return (
		<div className="-mt-[70px] flex min-h-screen items-center justify-center">
			<div className="flex justify-center gap-20">
				<LoginForm />
				<RegisterForm />
			</div>
		</div>
	);
}
