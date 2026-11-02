/**
 * =========================================================================
 * APSIS - The Archives & Memory Vault
 * =========================================================================
 * Two featured memories & "Earrings" by Malcolm Todd soundtrack
 * =========================================================================
 */

const MEMORIES_CONFIG = {
    // Header & Titles
    title: "The Archives",
    subtitle: "A collection of questionable decisions, legendary moments, and pure chaos.",

    // Background Soundtrack
    soundtrack: {
        title: "Earrings",
        artist: "Malcolm Todd",
        spotifyTrackId: "0eAuGrXyGFYwur9ARUe7LJ",
        youtubeId: "a4tdS3IB294"
    },

    // Final note at the bottom
    farewellLetter: {
        heading: "Till Next Time",
        body: "Too many legendary memories to fit in one place. Flip through these whenever you need a reminder of what real chaos looks like.",
        signoff: "Catch you on the flip side ✌️"
    },

    // Exactly the 2 pictures from the Memories folder
    memories: [
        {
            id: 1,
            title: "Memory #1",
            date: "Chapter 1",
            image: "images/memory1.jpg",
            caption: "Classic moment. Pure unfiltered memories.",
            tag: "Original"
        },
        {
            id: 2,
            title: "Caught in 4K",
            date: "Chapter 2",
            image: "images/memory2.jpg",
            caption: "Zero thoughts, head empty, pure unscripted vibes.",
            tag: "Candid"
        }
    ]
};
