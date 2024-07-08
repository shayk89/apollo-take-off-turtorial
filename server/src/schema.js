const gql = require("graphql-tag");

const typeDefs = gql`
type Query {
    "Get tracks arrayfor homepage grid"
    tracksForHome: [Track!]!
    "Fetch a specific track, provided a track's ID"
    track(id: ID!): Track
    "Fetch a specific Nodule, given the module's ID"
    module(id:ID!): Module
}

type Mutation {
    incrementTrackViews(id:ID!): IncrementTrackViewsResponse!
}

type IncrementTrackViewsResponse{
    "Similar to the HTTP status code, represents the status of the mutation"
    code: Int!
    "Indicates whether the mutation was successful"
    success: Boolean!
    "Human-readable message for the UI"
    message: String!
    "Newly updated Track after mutation"
    track: Track
}

"A track is a group of Modules that teaches about a specific topic"
type Track {
    id: ID!
    "The track's title"
    title: String!
    "The track's main author"
    author: Author!
    "The track's main illustration to display in the track card or track page detail"
    thumbnail: String
    "The track's aproximats length of time to complete, in minutes"
    length: Int
    "The number of modules this track contains"
    modulesCount: Int
    "The track's complete description, can be in Markdown format"
    description: String
    "The number of times a track has been viewed"
    numberOfViews: Int
    "The track's complete array of Modules"
    modules: [Module!]!
}

type Module {
    id: ID!
    "The Module's title"
    title: String!
    "The Module's length in minutes"
    length:Int
    "The url to the Module's video"
    videoUrl: String
    "The module's text-based description content, can be in Markdown format. For videos, it will be the transcript"
    content:String
}

"Author of a complete track"
type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile picture url"
    photo:String
}
`;

module.exports = typeDefs;