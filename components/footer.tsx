export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4" style={{ color: '#00a680' }}>
              Trinity Heritage Clinic
            </h3>
            <p className="text-gray-300 text-sm">
              Providing excellent occupational health services for businesses in the Dallas Fort Worth metroplex.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4" style={{ color: '#00a680' }}>
              Contact Info
            </h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>
                <strong>Address:</strong><br />
                1475 Heritage Pkwy Ste 225<br />
                Mansfield, TX 76063
              </p>
              <p>
                <strong>Phone:</strong><br />
                <a href="tel:8174537522" className="hover:text-white transition-colors">
                  (817) 453-7522
                </a>
              </p>
              <p>
                <strong>Fax:</strong><br />
                <a href="tel:1-866-665-6659" className="hover:text-white transition-colors">
                  1-(866) 665-6659
                </a>
              </p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-bold mb-4" style={{ color: '#00a680' }}>
              Hours of Operation
            </h4>
            <div className="text-sm text-gray-300 space-y-1">
              <p><strong>Mon-Fri:</strong> 8:30a - 5:30p</p>
              <p className="text-xs">(Closed 12p - 1p for lunch)</p>
              <p><strong>Sat & Sun:</strong> Closed</p>
              <p className="mt-3 text-xs italic">
                <strong>After Hours:</strong><br />
                Call (817) 966-3989<br />
                for urgent medical matters
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p className="mb-2">
            To learn more about how we can help your business, call us today:{' '}
            <strong style={{ color: '#00a680' }}>
              <a href="tel:8174537522">(817) 453-7522</a>
            </strong>
          </p>
          <p>
            &copy; {currentYear} Trinity Heritage Clinic. All rights reserved. Working to keep your workforce well.
          </p>
        </div>
      </div>
    </footer>
  )
}
