import { image } from '../../utils/image';

const ProfileTransfer = ({ name, jabatan }) => {
	return (
		<div className="w-20 flex flex-col items-center justify-center gap-1">
			<div className="w-14 h-14 mb-2 overflow-hidden rounded-full grid place-content-center">
				<img src={image.profil} alt="profil" />
			</div>
			<p className="font-semibold">{name}</p>
			<p className="text-slate-400 font-bold -mt-2">{jabatan}</p>
		</div>
	);
};

export default ProfileTransfer;
