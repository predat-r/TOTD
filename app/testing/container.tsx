/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import { useIntersection } from "@mantine/hooks";

const posts = [
    { id: 1, title: "Post 1" },
    { id: 2, title: "Post 2" },
    { id: 3, title: "Post 3" },
];


const fetchPost = async (page: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return posts.slice((page - 1) * 2, 2 * page);
};

const TestingPage = () => {
    const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
        queryKey: ['query'],
        queryFn: async ({ pageParam = 1 }) => {
            const response = await fetchPost(pageParam);
            return response;
        },
        getNextPageParam: (_, pages) => {
            return pages.length + 1;
        },
        initialData: {
            pages: [posts.slice(0, 2)],
            pageParams: [1],
        },
        initialPageParam: 1,
    });

    const lastPostRef = useRef<HTMLElement>(null);
    const { ref, entry } = useIntersection({
        root: null, // Observe viewport instead of an element
        threshold: 1,
    });

    // Trigger fetch when the last post comes into view
    useEffect(() => {
        if (entry?.isIntersecting) {
            fetchNextPage();
        }
    }, [entry, fetchNextPage]);

    const _posts = data?.pages.flatMap((page) => page);

    return (
        <div>
            posts:
            {_posts?.map((post, i) => {
                const isLastPost = i === _posts.length - 1;
                return (
                    <div
                        key={post.id}
                        ref={isLastPost ? ref : null}
                        className="h-80 bg-white text-black"
                    >
                        {post.title}
                    </div>
                );
            })}
            {isFetchingNextPage && <div>Loading more...</div>}
            <button
                onClick={() => fetchNextPage()}
                disabled={isFetchingNextPage}
            >
                {isFetchingNextPage
                    ? 'Loading more...'
                    : (data?.pages.length ?? 0) < 3
                        ? 'Load More'
                        : 'Nothing more to load'
                }
            </button>
        </div>
    );
};

export default TestingPage;
