import type { NextPage } from "next";
import Head from "next/head";
import {TaskDetailsView} from "../views";

const TaskDetails: NextPage = (props) => {
    return (
        <div>
            <Head>
                <title>TaskFlow</title>
                <meta
                    name="description"
                    content="Create Task"
                />
            </Head>
            <TaskDetailsView />
        </div>
    );
}

export default TaskDetails;