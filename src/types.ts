/**
 * ProjectName: hypergl-demo
 * FilePath: \src\types.ts
 * Created Date: Friday, October 12th 2018, 1:44:29 pm
 * @author: liaodh
 * @summary: short description for the file
 * -----
 * Last Modified: Friday, October 12th 2018, 4:11:40 pm
 * Modified By: liaodh
 * -----
 * Copyright (c) 2018 jiguang
 */



export interface HistoryProps {
    history: {
        push: (url: string) => void
    }
}

export interface DvaProps {
    dispatch: ({ type: string }) => void
}

export type PageProps = HistoryProps & DvaProps;