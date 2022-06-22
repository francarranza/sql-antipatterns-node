exports.up = async client => {
	// <insert magic here>
	await client`
		CREATE TABLE IF NOT EXISTS comments_adj (
			comment_id SERIAL PRIMARY KEY,
			parent_id BIGINT,
			bug_id BIGINT NOT NULL,
			author VARCHAR(10) NOT NULL,
			comment VARCHAR(1000) NOT NULL,
			FOREIGN KEY (parent_id) REFERENCES comments_adj(comment_id),
			FOREIGN KEY (bug_id) REFERENCES bugs
		);`
};

exports.down = async client => {
	// just in case...
};
