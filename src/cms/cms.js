import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import JoinPagePreview from './preview-templates/JoinPagePreview'
import TestimonialPagePreview from './preview-templates/TestimonialPagePreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('join', JoinPagePreview)
CMS.registerPreviewTemplate('testimonial', TestimonialPagePreview)
