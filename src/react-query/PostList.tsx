import { useState } from 'react';
import usePosts from './hooks/usePosts';
import React from 'react';

const PostList = () => {
	const pageSize = 10;
	// const [page, setPage] = useState(1);
	// const { data: posts, error, isLoading } = usePosts({ page, pageSize });
	const { data, error, isLoading, fetchNextPage, isFetchingNextPage } =
		usePosts({ pageSize });

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>{error.message}</p>;

	return (
		<>
			{/* <select
				// onChange={(e) => console.log(e.target.value)}
				onChange={(e) => setUserId(parseInt(e.target.value))}
				value={userId}
				className="form-select mb-3"
			>
				<option value=""></option>
				<option value="1">User 1</option>
				<option value="2">User 2</option>
				<option value="3">User 3</option>
			</select> */}
			<ul className="list-group">
				{data.pages.map((page, index) => (
					<React.Fragment key={index}>
						{page.map((post) => (
							<li key={post.id} className="list-group-item">
								{post.title}
							</li>
						))}
					</React.Fragment>
				))}
			</ul>
			{/* <button
				onClick={() => setPage(page - 1)}
				disabled={page === 1}
				className="btn btn-primary my-3"
			>
				Previous
			</button> */}
			{/* <button
				onClick={() => setPage(page + 1)}
				className="btn btn-primary my-3 ms-3"
				disabled={page === pageSize}
			>
				Next
			</button> */}
			<button
				onClick={() => fetchNextPage()}
				className="btn btn-primary my-3 ms-3"
				disabled={isFetchingNextPage}
				// disabled={page === pageSize}
			>
				{/* Load More */}
				{isFetchingNextPage ? 'Loading...' : 'Load More'}
			</button>
		</>
	);
};

export default PostList;
