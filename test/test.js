#!/usr/bin/env node

/// <reference path="typings/main.d.ts" />
var gulpWaveThrough = require("../index.js");
plugins = {
    beautylog: require("beautylog"),
    gulp: require("gulp"),
    g: {
        function: require("gulp-function")
    }
};
describe("gulp-wavethrough", function () {
    it("should run through smoothly", function (done) {
        plugins.gulp.src(["./test/test.md"])
            .pipe(gulpWaveThrough())
            .pipe(plugins.g.function(done));
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMENBQTBDO0FBQzFDLElBQUksZUFBZSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUU3QyxPQUFPLEdBQUc7SUFDTixTQUFTLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQztJQUMvQixJQUFJLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDLEVBQUM7UUFDRSxRQUFRLEVBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQztLQUNyQztDQUNKLENBQUE7QUFJRCxRQUFRLENBQUMsa0JBQWtCLEVBQUM7SUFDeEIsRUFBRSxDQUFDLDZCQUE2QixFQUFDLFVBQVMsSUFBSTtRQUMxQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUM7YUFDL0IsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2FBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJ0eXBpbmdzL21haW4uZC50c1wiIC8+XG52YXIgZ3VscFdhdmVUaHJvdWdoID0gcmVxdWlyZShcIi4uL2luZGV4LmpzXCIpO1xuXG5wbHVnaW5zID0ge1xuICAgIGJlYXV0eWxvZzogcmVxdWlyZShcImJlYXV0eWxvZ1wiKSxcbiAgICBndWxwOiByZXF1aXJlKFwiZ3VscFwiKSxcbiAgICBnOntcbiAgICAgICAgZnVuY3Rpb246IHJlcXVpcmUoXCJndWxwLWZ1bmN0aW9uXCIpXG4gICAgfVxufVxuXG5cblxuZGVzY3JpYmUoXCJndWxwLXdhdmV0aHJvdWdoXCIsZnVuY3Rpb24oKXtcbiAgICBpdChcInNob3VsZCBydW4gdGhyb3VnaCBzbW9vdGhseVwiLGZ1bmN0aW9uKGRvbmUpe1xuICAgICAgICBwbHVnaW5zLmd1bHAuc3JjKFtcIi4vdGVzdC90ZXN0Lm1kXCJdKVxuICAgICAgICAgICAgLnBpcGUoZ3VscFdhdmVUaHJvdWdoKCkpXG4gICAgICAgICAgICAucGlwZShwbHVnaW5zLmcuZnVuY3Rpb24oZG9uZSkpO1xuICAgIH0pXG59KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
