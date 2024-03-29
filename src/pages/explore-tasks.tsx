import type { NextPage } from "next";
import Head from "next/head";
import { ExploreTasksView } from "../views";

const ExploreTasks: NextPage = (props) => {
    return (
        <div>
            <Head>
                <title>TaskFlow</title>
                <meta
                    name="description"
                    content="Explore Tasks"
                />
            </Head>
            <ExploreTasksView />
        </div>
    );
}

export default ExploreTasks;