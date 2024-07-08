import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Layout, ModuleDetail, QueryResult } from "../components";
import { useParams } from "react-router-dom";

export const GET_MODULE_AND_PARENT_TRACK = gql`
 query GetTrackModule($moduleId: ID!, $trackId: ID!) {
  module(id: $moduleId) {
    id
    title
    length
    videoUrl
    content
  }
  track(id: $trackId) {
    title
    id
    modules {
      id
      title
      length
    }
  }
}
`;

const Module = () => {
    const {moduleId, trackId} = useParams();
    const {loading, error, data} = useQuery(GET_MODULE_AND_PARENT_TRACK,{
        variables:{moduleId, trackId}
    });
    return(<Layout fullWidth>
            <QueryResult loading={loading} error={error} data={data}>
                <ModuleDetail track={data?.track} module={data?.module}/>
            </QueryResult>
        </Layout>);
};

export default Module;