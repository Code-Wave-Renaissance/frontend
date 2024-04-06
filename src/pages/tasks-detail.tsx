import type { NextPage } from "next";
import Head from "next/head";
import TaskDetailsView from "../views/task-details";

const TaskDetails: NextPage = (props) => {
    return (
        <div>
            <Head>
                <title>TaskFlow</title>
                <meta
                    name="description"
                    content="Task Details"
                />
            </Head>
            <TaskDetailsView />
        </div>
    );
}

export default TaskDetails;