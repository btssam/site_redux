const treeDatabase = {
    arts: {
        nodes: [
            //row1
            {
                id: "design-concepts",
                label: "Design<br>Concepts",
                icon: "Art_Icons/Design_Concepts.png",
                title: "Design Concepts",
                type: "Arts Skill",
                req: "",
                desc: "My understanding of Design Concepts, such as Gestalt, was established in my Associate's program.",
                descLong: "My understanding of Design Concepts, such as Gestalt, was established in my Associate's program. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br><br> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                points: "5/5",
                pointClass: "full",
                gridPos: "1 / 2"
            },
            {
                id: "sketching",
                label: "Sketching",
                icon: "Art_Icons/Sketching.png",
                title: "Sketching",
                type: "Arts Skill",
                req: "",
                desc: `I have doodled periodically throughout my life. In my Associate's program, I took two classes 
                that involved sketching with pencil, colored pencils, and graphite.`,
                descLong: "I have doodled periodically throughout my life. In my Associate's program, I took two classes that involved sketching with pencil, colored pencils, and graphite.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br><br> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                points: "5/5",
                pointClass: "full",
                gridPos: "1 / 3"
            },
            //row2
            {
                id: "writing",
                label: "Writing",
                icon: "Art_Icons/Writing.png",
                title: "Writing",
                type: "Arts Skill",
                req: "Requires Something",
                desc: "This description is entirely temporary. This is a skill. I learned it. Lorem Ipsum is simply placeholder latin text...",
                descLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br><br> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                points: "5/5",
                pointClass: "full",
                gridPos: "2 / 1"
            },
            {
                id: "audio",
                label: "Audio",
                icon: "Art_Icons/Audio.png",
                title: "Audio",
                type: "Arts Skill",
                req: "Requires Something",
                desc: "This description is entirely temporary. This is a skill. I learned it. Lorem Ipsum is simply placeholder latin text...",
                descLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br><br> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                points: "0/5",
                pointClass: "zero",
                gridPos: "2 / 2"
            },
            {
                id: "figure-drawing",
                label: "Figure<br>Drawing",
                icon: "Art_Icons/Figure_Drawing.png",
                title: "Figure Drawing",
                type: "Arts Skill",
                req: "Requires Something",
                desc: `In my Associate's program, I took a course called Drawing the Human Form. In it, we drew on
                    easels using live models. I continued to explore gesture drawing for some time after my program, using
                    pencils.`,
                descLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br><br> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                points: "5/5",
                pointClass: "full",
                gridPos: "2 / 4"
            },
            //row3
            {
                id: "art-3d",
                label: "3D Art",
                icon: "Art_Icons/3D.png",
                title: "3D Art",
                type: "Arts Skill",
                req: "Requires Something",
                desc: "This description is entirely temporary. This is a skill. I learned it. Lorem Ipsum is simply placeholder latin text...",
                descLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br><br> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                points: "1/5",
                pointClass: "partial",
                gridPos: "3 / 1"
            },
            {
                id: "art-2d",
                label: "2D Art",
                title: "2D Art",
                type: "Arts Skill",
                req: "Requires Something",
                desc: "This description is entirely temporary. This is a skill. I learned it. Lorem Ipsum is simply placeholder latin text...",
                descLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br><br> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                points: "5/5",
                pointClass: "full",
                gridPos: "3 / 3"
            },
            //row4
            {
                id: "texture-uv",
                label: "Texture<br>UV",
                title: "Texture UV",
                type: "Arts Skill",
                req: "Requires Something",
                desc: "This description is entirely temporary. This is a skill. I learned it. Lorem Ipsum is simply placeholder latin text...",
                descLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br><br> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                points: "0/5",
                pointClass: "zero",
                gridPos: "4 / 1"
            },
            {
                id: "raster",
                label: "Raster",
                icon: "Art_Icons/Raster.png",
                title: "Raster",
                type: "Arts Skill",
                req: "Requires Something",
                desc: "This description is entirely temporary. This is a skill. I learned it. Lorem Ipsum is simply placeholder latin text...",
                descLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br><br> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                points: "0/5",
                pointClass: "zero",
                gridPos: "4 / 3"
            },
            {
                id: "vector",
                label: "Vector",
                icon: "Art_Icons/Vector.png",
                title: "Vector",
                type: "Arts Skill",
                req: "Requires Something",
                desc: "This description is entirely temporary. This is a skill. I learned it. Lorem Ipsum is simply placeholder latin text...",
                descLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br><br> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                points: "3/5",
                pointClass: "partial",
                gridPos: "4 / 4"
            },
            //row5
            {
                id: "rigging",
                label: "Rigging",
                title: "Rigging",
                type: "Arts Skill",
                req: "Requires Something",
                desc: "This description is entirely temporary. This is a skill. I learned it. Lorem Ipsum is simply placeholder latin text...",
                descLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br><br> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                points: "3/5",
                pointClass: "partial",
                gridPos: "5 / 1"
            },
            {
                id: "anim-3d",
                label: "3D Anim.",
                title: "3D Anim.",
                type: "Arts Skill",
                req: "Requires 3D Art and Rigging",
                desc: "This description is entirely temporary. This is a skill. I learned it. Lorem Ipsum is simply placeholder latin text...",
                descLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br><br> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                points: "3/5",
                pointClass: "partial",
                gridPos: "5 / 2"
            },
            {
                id: "anim-2d",
                label: "2D Anim.",
                title: "2D Anim.",
                type: "Arts Skill",
                req: "Requires Something",
                desc: "This description is entirely temporary. This is a skill. I learned it. Lorem Ipsum is simply placeholder latin text...",
                descLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br><br> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                points: "3/5",
                pointClass: "partial",
                gridPos: "5 / 3"
            },
            //row6
            {
                id: "ui-ux",
                label: "UI/UX<br>Design",
                title: "UI/UX Design",
                type: "Arts Skill",
                req: "Requires Something",
                desc: "This description is entirely temporary. This is a skill. I learned it. Lorem Ipsum is simply placeholder latin text...",
                descLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br><br> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                points: "3/5",
                pointClass: "partial",
                gridPos: "6 / 2"
            },
            //row7
            {
                id: "web-design",
                label: "Web<br>Design",
                title: "Web Design",
                type: "Arts Skill",
                req: "Requires Something",
                desc: "This description is entirely temporary. This is a skill. I learned it. Lorem Ipsum is simply placeholder latin text...",
                descLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br><br> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                points: "3/5",
                pointClass: "partial",
                gridPos: "7 / 2"
            },
        ],
        connections: [
            {from: 'sketching', to: 'art-2d', type: 'straight'},
            {from: 'sketching', to: 'figure-drawing', type: 'elbow'},
            {from: 'art-3d', to: 'texture-uv', type: 'straight'},
            {from: 'art-3d', to: 'anim-3d', type: 'elbow'},
            {from: 'art-2d', to: 'raster', type: 'straight'},
            {from: 'art-2d', to: 'vector', type: 'elbow'},
            {from: 'raster', to: 'anim-2d', type: 'straight'},
            {from: 'rigging', to: 'anim-3d', type: 'straight'},
            {from: 'ui-ux', to: 'web-design', type: 'straight'},
        ]
    },
    games: {
        nodes: [
            //row1
            {
                id: "game-fundamentals",
                label: "Game<br>Design<br> Fundamentals",
                title: "Game Design Fundamentals",
                type: "Games Skill",
                req: "",
                desc: "My understanding of Design Concepts...",
                descLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br><br> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                points: "5/5",
                pointClass: "full",
                gridPos: "1 / 2"
            },
            //row2
            {
                id: "narrative-design",
                label: "Narrative<br>Design",
                title: "Narrative Design",
                type: "Games Skill",
                req: "Requires Game Design Fundamentals",
                desc: "This description is entirely temporary. This is a skill. I learned it. Lorem Ipsum is simply placeholder latin text...",
                descLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br><br> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                points: "0/5",
                pointClass: "zero",
                gridPos: "2 / 1"
            },
            {
                id: "system-design",
                label: "System<br>Design",
                title: "System Design",
                type: "Games Skill",
                req: "Requires Game Design Fundamentals",
                desc: "This description is entirely temporary. This is a skill. I learned it. Lorem Ipsum is simply placeholder latin text...",
                descLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br><br> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                points: "5/5",
                pointClass: "full",
                gridPos: "2 / 2"
            },
            {
                id: "level-design",
                label: "Level<br>Design",
                title: "Level Design",
                type: "Level Design",
                req: "Requires Something",
                desc: "This description is entirely temporary. This is a skill. I learned it. Lorem Ipsum is simply placeholder latin text...",
                descLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br><br> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                points: "5/5",
                pointClass: "full",
                gridPos: "2 / 3"
            },
            //row3
            {
                id: "digital",
                label: "Digital<br>Design",
                title: "Digital Design",
                type: "Games Skill",
                req: "",
                desc: "This description is entirely temporary. This is a skill. I learned it. Lorem Ipsum is simply placeholder latin text...",
                descLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br><br> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                points: "1/5",
                pointClass: "partial",
                gridPos: "3 / 2"
            },
            {
                id: "tabletop",
                label: "Tabletop<br>Design",
                title: "Tabletop Design",
                type: "Arts Skill",
                req: "",
                desc: "This description is entirely temporary. This is a skill. I learned it. Lorem Ipsum is simply placeholder latin text...",
                descLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br><br> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                points: "5/5",
                pointClass: "full",
                gridPos: "3 / 4"
            },
            //row4
            {
                id: "rapid-prototyping",
                label: "Rapid<br>Prototyping",
                title: "Rapid Prototyping",
                type: "Games Skill",
                req: "Requires Tabletop Design",
                desc: "This description is entirely temporary. This is a skill. I learned it. Lorem Ipsum is simply placeholder latin text...",
                descLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br><br> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                points: "3/5",
                pointClass: "partial",
                gridPos: "4 / 4"
            },
            //row5
            {
                id: "gameplay-programming",
                label: "Gameplay<br>Programming",
                icon: "Game_Icons/gameplay_programming.png",
                title: "Gameplay Programming",
                type: "Games Skill",
                req: "Requires Digital Design",
                desc: "This description is entirely temporary. This is a skill. I learned it. Lorem Ipsum is simply placeholder latin text...",
                descLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br><br> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                points: "3/5",
                pointClass: "partial",
                gridPos: "5 / 2"
            },
            //row6
            {
                id: "unity",
                label: "Unity<br>Game<br>Engine",
                icon: "Game_Icons/Unity.png",
                title: "Unity Game Engine",
                type: "Games Skill",
                req: "Requires Digital Design",
                desc: "This description is entirely temporary. This is a skill. I learned it. Lorem Ipsum is simply placeholder latin text...",
                descLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br><br> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                points: "0/5",
                pointClass: "zero",
                gridPos: "6 / 1"
            },
            {
                id: "godot",
                label: "Godot<br>Game<br>Engine",
                icon: "Game_Icons/Godot.png",
                title: "Godot Game Engine",
                type: "Games Skill",
                req: "Requires Digital Design",
                desc: "This description is entirely temporary. This is a skill. I learned it. Lorem Ipsum is simply placeholder latin text...",
                descLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br><br> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                points: "0/5",
                pointClass: "zero",
                gridPos: "6 / 2"
            },
            {
                id: "unreal",
                label: "Unreal<br>Game<br>Engine",
                icon: "Game_Icons/Unreal.png",
                title: "Unreal Game Engine",
                type: "Games Skill",
                req: "Requires Digital Design",
                desc: "This description is entirely temporary. This is a skill. I learned it. Lorem Ipsum is simply placeholder latin text...",
                descLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br><br> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                points: "3/5",
                pointClass: "partial",
                gridPos: "6 / 3"
            },
            {
                id: "game-process",
                label: "Game<br>Development<br>Process",
                title: "Game Development Process",
                type: "Games Skill",
                req: "",
                desc: "I have doodled periodically throughout my life. In my Associate's program...",
                descLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br><br> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                points: "5/5",
                pointClass: "full",
                gridPos: "6 / 4"
            },
            //row7
            {
                id: "pitching",
                label: "Pitching",
                title: "Pitching",
                type: "Games Skill",
                req: "Requires Game Development Process",
                desc: "This description is entirely temporary. This is a skill. I learned it. Lorem Ipsum is simply placeholder latin text...",
                descLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br><br> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                points: "1/5",
                pointClass: "partial",
                gridPos: "7 / 4"
            },
        ],
        connections: [
            {from: 'game-fundamentals', to: 'narrative-design', type: 'left-elbow'},
            {from: 'game-fundamentals', to: 'system-design', type: 'straight'},
            {from: 'game-fundamentals', to: 'level-design', type: 'elbow'},
            {from: 'digital', to: 'gameplay-programming', type: 'straight'},
            {from: 'tabletop', to: 'rapid-prototyping', type: 'straight'},
            {from: 'gameplay-programming', to: 'unity', type: 'left-elbow'},
            {from: 'gameplay-programming', to: 'godot', type: 'straight'},
            {from: 'gameplay-programming', to: 'unreal', type: 'elbow'},
            {from: 'game-process', to: 'pitching', type: 'straight'},
        ]
    },
    computers: {
        nodes: [
            //row1
            {
                id: "architecture",
                label: "Architecture",
                icon: "Computer_Icons/architecture.png",
                title: "Architecture",
                type: "Computers Skill",
                req: "",
                desc: "My understanding of Design Concepts...",
                descLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br><br> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                points: "5/5",
                pointClass: "full",
                gridPos: "1 / 1"
            },
            {
                id: "programming-concepts",
                label: "Programming<br>Concepts",
                icon: "Computer_Icons/concepts.png",
                title: "Programming Concepts",
                type: "Computers Skill",
                req: "",
                desc: "I have doodled periodically throughout my life. In my Associate's program...",
                descLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br><br> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                points: "5/5",
                pointClass: "full",
                gridPos: "1 / 2"
            },
            //row2
            {
                id: "dev-process",
                label: "Development<br>Process",
                title: "Development Process",
                type: "Computers Skill",
                req: "",
                desc: "This description is entirely temporary. This is a skill. I learned it. Lorem Ipsum is simply placeholder latin text...",
                descLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br><br> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                points: "0/5",
                pointClass: "zero",
                gridPos: "2 / 1"
            },
            {
                id: "programming-languages",
                label: "Programming<br>Languages",
                title: "Programming Languages",
                type: "Computers Skill",
                req: "Requires Programming Concepts",
                desc: "This description is entirely temporary. This is a skill. I learned it. Lorem Ipsum is simply placeholder latin text...",
                descLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br><br> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                points: "5/5",
                pointClass: "full",
                gridPos: "2 / 2"
            },
            {
                id: "math",
                label: "Math",
                title: "Math",
                type: "Computers Skill",
                req: "",
                desc: "This description is entirely temporary. This is a skill. I learned it. Lorem Ipsum is simply placeholder latin text...",
                descLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br><br> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                points: "5/5",
                pointClass: "full",
                gridPos: "2 / 4"
            },
            //row3
            {
                id: "web-frameworks",
                label: "Web<br>Frameworks",
                title: "Web Frameworks",
                type: "Computers Skill",
                req: "Requires Programming Languages",
                desc: "This description is entirely temporary. This is a skill. I learned it. Lorem Ipsum is simply placeholder latin text...",
                descLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br><br> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                points: "1/5",
                pointClass: "partial",
                gridPos: "3 / 2"
            },
            {
                id: "html-css",
                label: "HTML/<br>CSS",
                icon: "Computer_Icons/html.png",
                title: "HTML/CSS",
                type: "Computers Skill",
                req: "",
                desc: "This description is entirely temporary. This is a skill. I learned it. Lorem Ipsum is simply placeholder latin text...",
                descLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br><br> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                points: "5/5",
                pointClass: "full",
                gridPos: "3 / 3"
            },
            //row4
            {
                id: "databases",
                label: "Databases",
                icon: "Computer_Icons/databases.png",
                title: "Databases",
                type: "Computers Skill",
                req: "",
                desc: "This description is entirely temporary. This is a skill. I learned it. Lorem Ipsum is simply placeholder latin text...",
                descLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br><br> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                points: "0/5",
                pointClass: "zero",
                gridPos: "4 / 1"
            },
            {
                id: "full-stack",
                label: "Full<br>Stack<br>Development",
                title: "Full Stack Development",
                type: "Computers Skill",
                req: "Requires Web Frameworks, Databases, and Message Brokers",
                desc: "This description is entirely temporary. This is a skill. I learned it. Lorem Ipsum is simply placeholder latin text...",
                descLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br><br> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                points: "0/5",
                pointClass: "zero",
                gridPos: "4 / 2"
            },
            {
                id: "message-brokers",
                label: "Message Brokers",
                title: "Message Brokers",
                type: "Computers Skill",
                req: "",
                desc: "This description is entirely temporary. This is a skill. I learned it. Lorem Ipsum is simply placeholder latin text...",
                descLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br><br> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                points: "3/5",
                pointClass: "partial",
                gridPos: "4 / 3"
            },
            //row5
            {
                id: "ci-cd",
                label: "CI/CD",
                title: "CI/CD",
                type: "Computers Skill",
                req: "Requires Full Stack Development",
                desc: "This description is entirely temporary. This is a skill. I learned it. Lorem Ipsum is simply placeholder latin text...",
                descLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br><br> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                points: "3/5",
                pointClass: "partial",
                gridPos: "5 / 2"
            },
            {
                id: "containers",
                label: "Containers",
                icon: "Computer_Icons/containers.png",
                title: "Containers",
                type: "Computers Skill",
                req: "",
                desc: "This description is entirely temporary. This is a skill. I learned it. Lorem Ipsum is simply placeholder latin text...",
                descLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br><br> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                points: "3/5",
                pointClass: "partial",
                gridPos: "5 / 3"
            },
            //row6
            {
                id: "os",
                label: "Operating<br>Systems",
                icon: "Computer_Icons/os.png",
                title: "Operating Systems",
                type: "Computers Skill",
                req: "",
                desc: "This description is entirely temporary. This is a skill. I learned it. Lorem Ipsum is simply placeholder latin text...",
                descLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br><br> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                points: "3/5",
                pointClass: "partial",
                gridPos: "6 / 1"
            },
            {
                id: "computer-graphics",
                label: "Computer<br>Graphics",
                title: "Computer Graphics",
                type: "Computers Skill",
                req: "Requires Math",
                desc: "This description is entirely temporary. This is a skill. I learned it. Lorem Ipsum is simply placeholder latin text...",
                descLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br><br> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                points: "3/5",
                pointClass: "partial",
                gridPos: "6 / 4"
            },
            //row7
            {
                id: "sys-admin",
                label: "System<br>Administration",
                icon: "Computer_Icons/sysadmin.png",
                title: "System Administration",
                type: "Computers Skill",
                req: "Requires Operating Systems",
                desc: "This description is entirely temporary. This is a skill. I learned it. Lorem Ipsum is simply placeholder latin text...",
                descLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br><br> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                points: "3/5",
                pointClass: "partial",
                gridPos: "7 / 1"
            },
            {
                id: "docs",
                label: "Documentation",
                title: "Documentation",
                type: "Computers Skill",
                req: "",
                desc: "This description is entirely temporary. This is a skill. I learned it. Lorem Ipsum is simply placeholder latin text...",
                descLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br><br> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                points: "3/5",
                pointClass: "partial",
                gridPos: "7 / 2"
            },
        ],
        connections: [
            {from: 'programming-concepts', to: 'programming-languages', type: 'straight'},
            {from: 'programming-languages', to: 'web-frameworks', type: 'straight'},
            {from: 'math', to: 'computer-graphics', type: 'straight'},
            {from: 'web-frameworks', to: 'full-stack', type: 'straight'},
            {from: 'html-css', to: 'web-frameworks', type: 'straight'},
            {from: 'databases', to: 'full-stack', type: 'straight'},
            {from: 'message-brokers', to: 'full-stack', type: 'straight'},
            {from: 'full-stack', to: 'ci-cd', type: 'straight'},
            {from: 'containers', to: 'ci-cd', type: 'straight'},
            {from: 'os', to: 'sys-admin', type: 'straight'},
        ]
    }
};