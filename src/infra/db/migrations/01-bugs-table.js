exports.up = async client => {
	// <insert magic here>
	await client`
		CREATE TABLE IF NOT EXISTS bugs (
			bug_id SERIAL PRIMARY KEY,
			name VARCHAR(50)
		);`;
};

exports.down = async client => {
	// just in case...
};
