const treeDatabase = {
    arts: {
        nodes: [
            //row1
            {
                id: "design-concepts",
                label: "Design<br>Concepts",
                title: "Design Concepts",
                type: "Arts Skill",
                req: "",
                desc: "My understanding of Design Concepts...",
                green: "Click To Learn More",
                points: "5/5",
                pointClass: "full",
                gridPos: "1 / 2"
            },
            {
                id: "sketching",
                label: "Sketching",
                title: "Sketching",
                type: "Arts Skill",
                req: "",
                desc: "I have doodled periodically throughout my life. In my Associate's program...",
                green: "Click To Learn More",
                points: "5/5",
                pointClass: "full",
                gridPos: "1 / 3"
            },
            //row2
            {
                id: "audio",
                label: "Audio",
                title: "Audio",
                type: "Arts Skill",
                req: "Requires Something",
                desc: "This description is entirely temporary. This is a skill. I learned it. Lorem Ipsum is simply...",
                green: "Click To Learn More",
                points: "0/5",
                pointClass: "zero",
                gridPos: "2 / 1"
            },
            {
                id: "writing",
                label: "Writing",
                title: "Writing",
                type: "Arts Skill",
                req: "Requires Something",
                desc: "This description is entirely temporary. This is a skill. I learned it. Lorem Ipsum is simply...",
                green: "Click To Learn More",
                points: "5/5",
                pointClass: "full",
                gridPos: "2 / 2"
            },
            {
                id: "figure-drawing",
                label: "Figure<br>Drawing",
                title: "Figure Drawing",
                type: "Arts Skill",
                req: "Requires Something",
                desc: "This description is entirely temporary. This is a skill. I learned it. Lorem Ipsum is simply...",
                green: "Click To Learn More",
                points: "5/5",
                pointClass: "full",
                gridPos: "2 / 4"
            },
            //row3
            {
                id: "art-3d",
                label: "3D Art",
                title: "3D Art",
                type: "Arts Skill",
                req: "Requires Something",
                desc: "This description is entirely temporary. This is a skill. I learned it. Lorem Ipsum is simply...",
                green: "Click To Learn More",
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
                desc: "This description is entirely temporary. This is a skill. I learned it. Lorem Ipsum is simply...",
                green: "Click To Learn More",
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
                desc: "This description is entirely temporary. This is a skill. I learned it. Lorem Ipsum is simply...",
                green: "Click To Learn More",
                points: "0/5",
                pointClass: "zero",
                gridPos: "4 / 1"
            },
            {
                id: "raster",
                label: "Raster",
                title: "Raster",
                type: "Arts Skill",
                req: "Requires Something",
                desc: "This description is entirely temporary. This is a skill. I learned it. Lorem Ipsum is simply...",
                green: "Click To Learn More",
                points: "0/5",
                pointClass: "zero",
                gridPos: "4 / 3"
            },
            {
                id: "vector",
                label: "Vector",
                title: "Vector",
                type: "Arts Skill",
                req: "Requires Something",
                desc: "This description is entirely temporary. This is a skill. I learned it. Lorem Ipsum is simply...",
                green: "Click To Learn More",
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
                desc: "This description is entirely temporary. This is a skill. I learned it. Lorem Ipsum is simply...",
                green: "Click To Learn More",
                points: "3/5",
                pointClass: "partial",
                gridPos: "5 / 1"
            },
            {
                id: "anim-3d",
                label: "3D Anim.",
                title: "3D Anim.",
                type: "Arts Skill",
                req: "Requires Something",
                desc: "This description is entirely temporary. This is a skill. I learned it. Lorem Ipsum is simply...",
                green: "Click To Learn More",
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
                desc: "This description is entirely temporary. This is a skill. I learned it. Lorem Ipsum is simply...",
                green: "Click To Learn More",
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
                desc: "This description is entirely temporary. This is a skill. I learned it. Lorem Ipsum is simply...",
                green: "Click To Learn More",
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
                desc: "This description is entirely temporary. This is a skill. I learned it. Lorem Ipsum is simply...",
                green: "Click To Learn More",
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
    }
};