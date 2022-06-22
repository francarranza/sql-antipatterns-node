const { TableNames } = require('../../../core/constants');

exports.up = async client => {
	// <insert magic here>
	await client`
		CREATE TABLE ${TableNames.bugs} (
			bug_id SERIAL PRIMARY KEY,
			name VARCHAR(50)
		);`;
	
	await client`
		CREATE TABLE ${TableNames.commentsAdj} (
			comment_id SERIAL PRIMARY KEY,
			parent_id BIGINT UNSIGNED,
			bug_id BIGINT UNSIGNED NOT NULL,
			FOREIGN KEY (parent_id) REFERENCES comments_adj(comment_id),
			FOREIGN KEY (bug_id) REFERENCES bugs
		);`
};

exports.down = async client => {
	// just in case...
};
