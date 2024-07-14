import Image from "next/image";

type AuthLogoProps = {};

export const AuthLogo = ({}: AuthLogoProps) => {
	return (
		<div className="hidden lg:flex flex-center bg-blue-600 h-full">
			<Image src="/logo.svg" alt="logo" height={100} width={100} />
		</div>
	);
};
