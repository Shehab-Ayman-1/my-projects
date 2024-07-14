type AuthWelcomeProps = {};

export const AuthWelcome = ({}: AuthWelcomeProps) => {
	return (
		<div className="text-center space-y-4">
			<h1 className="font-bold text-3xl text-[#3e3a47]">Welcome Back!</h1>
			<p className="text-base text-[#738ca0]">Login Or Create Account To Back To Your Dashboard</p>
		</div>
	);
};
