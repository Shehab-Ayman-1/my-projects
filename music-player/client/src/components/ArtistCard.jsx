import { useNavigate } from "react-router-dom";

export const ArtistCard = ({ track: { artists, images, subtitle } }) => {
	const navigate = useNavigate();
	const styles = "flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer";

	const handleNavigate = () => navigate(`/artists/${artists[0].adamid}`);

	return (
		<div className={styles} onClick={handleNavigate}>
			<img src={images?.coverart} alt="song_img" className="w-full h-56 rounded-lg" />
			<p className="mt-4 font-semibold text-lg text-white truncate">{subtitle}</p>
		</div>
	);
};
