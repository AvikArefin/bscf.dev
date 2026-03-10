module.exports = function (eleventyConfig) {
    // Create a collection for events based on the 'events' tag
    eleventyConfig.addCollection("events", function (collectionApi) {
        return collectionApi.getFilteredByTag("events");
    });

    eleventyConfig.addCollection("recruitments", function (collectionApi) {
        return collectionApi.getFilteredByTag("recruitments");
    });

    // Passthrough copy for static assets
    eleventyConfig.addPassthroughCopy("src/css/");
    eleventyConfig.addPassthroughCopy("src/contents/");
    eleventyConfig.addPassthroughCopy("src/projects/**/*.{jpg,jpeg,png,avif}");
    eleventyConfig.addPassthroughCopy("src/apply/**/*.{jpg,jpeg,png,avif}");
    eleventyConfig.addPassthroughCopy("CNAME");

    // Return configuration options
    return {
        dir: {
            input: "src",
            includes: "_includes",
            output: "site"
        },
        templateFormats: ["njk", "md", "html"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk"
    };
};