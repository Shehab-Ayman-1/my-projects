import { SignIn } from "@clerk/nextjs";

import { AuthLogo } from "@/app/(auth)/components/logo";
import { AuthWelcome } from "@/app/(auth)/components/welcome";
import { AuthWidget } from "@/app/(auth)/components/widget";

const SignInPage = () => {
	return (
		<div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
			<div className="h-full lg:flex flex-col flex-center px-4">
				<AuthWelcome />
				<AuthWidget>
					<SignIn />
				</AuthWidget>
			</div>
			<AuthLogo />
		</div>
	);
};

export default SignInPage;
