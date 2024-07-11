const Profile = () => {
	return (
		<>
			<div id="profile" className="p-10 flex gap-10 items-center">
				<div id="profile_image">
					<img
						className="rounded-full"
						src="https://fakeimg.pl/100/"
						alt="Profile picture"
					/>
				</div>
				<div id="profile_info">
					<p className="max-w-md">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
						itaque, culpa nesciunt repudiandae assumenda qui beatae minus libero
						non dolorum animi harum sed aperiam totam placeat, alias minima?
						Dicta, ratione.
					</p>
				</div>
			</div>
		</>
	);
};
export default Profile;
