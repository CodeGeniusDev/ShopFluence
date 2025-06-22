import { TagIcon } from "lucide-react";
import { defineType, defineField } from "sanity";

export const categoryType = defineType({
    name: "category",
    title: "Category",
    type: "document",
    icon: TagIcon,
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
        }),
        defineField({
            name: "image",
            title: "Category Image",
            type: "image",
            options: {
                hotspot: true
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "range",
            title: "Price Range",
            type: "number",
            description: "Starting price from"
        }),
        defineField({
            name: "featured",
            title: "Featured Category",
            type: "boolean",
            initialValue: false,
            description: "Mark as featured category"
        })
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: "description",
            media: 'image',
            featured: 'featured'
        },
        prepare(selection) {
            const { title, subtitle, media, featured } = selection;
            return {
                title: title,
                media: media,
                subtitle: subtitle,
                featured: featured ? '⭐ Featured' : ''
            };
        }
    }
});
