const resolvers = {
    Query: {
        // returns an array of Tracks that wil be used to populate
        // the homepage grid of our web client
        tracksForHome: (_, __, { dataSources }) => {

            return dataSources.trackAPI.getTracksForHome();
        },
        track: (_, { id }, { dataSources }) => {
            return dataSources.trackAPI.getTrack(id);

        },
        module:(_, {id}, {dataSources}) => {
            return dataSources.trackAPI.getModule(id);
        }
    },
    Mutation: {
        incrementTrackViews: async (_, { id }, { dataSources }) => {
            try{
                const track = await dataSources.trackAPI.incrementTrackViews(id);
                return {
                    code: 200,
                    success: true,
                    message: `Successfuly incremented the number of views for track ${id}`,
                    track,
                }
            }catch (err) {
                return{
                    code: err.extensions.response.status,
                    success:false,
                    message:err.extensions.response.body,
                    track:null
                }
            }
        }
    },
    Track: {
        author: ({ authorId }, _, { dataSources }) => {
            return dataSources.trackAPI.getAuthor(authorId);
        },
        modules: ({ id }, _, { dataSources }) => {
            return dataSources.trackAPI.getTrackModules(id);
        }
    },
};

module.exports = resolvers;