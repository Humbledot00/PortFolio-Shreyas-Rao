const posts = [
    {
      id: 1,
      title: 'Introduction to Android Mobile Application Development',
      href: '#',
      description:
        ' The Fundamental concepts of Android app development, Set up and explore the Android Studio interface, configurations and built-in tools, Use Kotlin Playground',
      date: 'May 14, 2023',
      datetime: 'May 14, 2023',
      category: { title: 'Mobile Development', href: '#' },
      image: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~GVMT27HRA5XS/CERTIFICATE_LANDING_PAGE~GVMT27HRA5XS.jpeg',
      author: {
        name: 'META',
        role: 'Coursera',
        href: 'https://www.coursera.org/account/accomplishments/verify/2LPAUC4XWP5X',
        imageUrl:
          'data:image/png;base64,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',
      },
    },
    {
        id: 2,
        title: 'Crash Course on Python',
        href: '#',
        description:
          'What Python is and why Python is relevant to automation. How to write short Python scripts to perform automated actions',
        date: 'January 9, 2023',
        datetime: 'January 9, 2023',
        category: { title: 'Python Programming', href: '#' },
        image: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~2LPAUC4XWP5X/CERTIFICATE_LANDING_PAGE~2LPAUC4XWP5X.jpeg',
        author: {
          name: 'Google',
          role: 'Coursera',
          href: 'https://www.coursera.org/account/accomplishments/verify/2LPAUC4XWP5X',
          imageUrl:
            'data:image/png;base64,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',
        },
      },
      {
        id: 3,
        title: 'Postman API Fundamentals Student Expert',
        href: '#',
        description:
          'A hand’s on certification that teaches:What APIs are and their importance in modern software development, How to use Postman to work with APIs',
        date: 'July 25, 2023',
        datetime: 'July 25, 2023',
        category: { title: 'API Scripting', href: '#' },
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0uyekROjeNymHcAUq1cIGTFknRX-g3nPgow&usqp=CAU',
        author: {
          name: 'Postman',
          role: 'Canvas Badges',
          href: 'https://badgr.com/public/assertions/lOqYBW71QsassS_oz_PgFw?action=download',
          imageUrl:
            'https://api.badgr.io/public/issuers/BC0x4AQaQPC7lFilsBP_tQ/image',
        },
      },
  ]
  
  export default function Certificate() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Certifications</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Here Are Few Of My Certifications.
            </p>
          </div>
          <div data-aos="zoom-in-up" className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <img src={post.image} alt="" className="h-2/3 w-full object-contain bg-gray-50" />
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }