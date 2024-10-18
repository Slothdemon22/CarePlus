import React from 'react';

// Main email template component for appointment confirmation
const AppointmentEmailTemplate = ({
  name,
  doctor,
  appointmentReason,
  dateTime,
}: {
  name: string;
  doctor: string;
  appointmentReason: string;
  dateTime: string;
}) => {
  return (
    <div>
      <table
        width="100%"
        style={{
          backgroundColor: '#f9f9f9',
          padding: '40px 0',
          fontFamily: '&apos;Arial&apos;, sans-serif',
        }}
        cellPadding={0}
        cellSpacing={0}
      >
        <tr>
          <td>
            <table
              style={{
                maxWidth: '650px',
                margin: '0 auto',
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
              }}
              cellPadding={0}
              cellSpacing={0}
            >
              {/* Header Section */}
              <tr>
                <td
                  style={{
                    background: 'linear-gradient(90deg, #28a745, #3dbd5d)',
                    padding: '40px',
                    textAlign: 'center',
                    borderBottom: '6px solid #28a745',
                  }}
                >
                  <h1
                    style={{
                      color: '#ffffff',
                      fontSize: '40px',
                      margin: '0',
                      fontWeight: '700',
                      letterSpacing: '1.5px',
                      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
                    }}
                  >
                    CarePlus
                  </h1>
                </td>
              </tr>

              {/* Body Section */}
              <tr>
                <td
                  style={{
                    padding: '40px 50px',
                    color: '#444444',
                  }}
                >
                  <h2
                    style={{
                      color: '#28a745',
                      fontSize: '30px',
                      marginBottom: '25px',
                      fontWeight: '700',
                    }}
                  >
                    Appointment Confirmation
                  </h2>

                  <p
                    style={{
                      fontSize: '20px',
                      lineHeight: '1.8',
                      marginBottom: '30px',
                      color: '#555555',
                    }}
                  >
                    Dear <strong>{name}</strong>,
                  </p>

                  <p
                    style={{
                      fontSize: '18px',
                      lineHeight: '1.8',
                      marginBottom: '30px',
                    }}
                  >
                    Your appointment with <strong>{doctor}</strong> has been scheduled successfully.
                  </p>

                  <p
                    style={{
                      fontSize: '18px',
                      lineHeight: '1.8',
                      marginBottom: '30px',
                    }}
                  >
                    <strong>Reason for Appointment:</strong> {appointmentReason}
                  </p>

                  <p
                    style={{
                      fontSize: '18px',
                      lineHeight: '1.8',
                      marginBottom: '30px',
                    }}
                  >
                    <strong>Date and Time:</strong> {dateTime}
                  </p>

                  <p
                    style={{
                      fontSize: '18px',
                      lineHeight: '1.8',
                      marginBottom: '40px',
                      color: '#666666',
                    }}
                  >
                    Thank you for choosing CarePlus! If you have any questions, feel free to contact us.
                  </p>

                  <div style={{ textAlign: 'center', margin: '40px 0' }}>
                    <a
                      href="https://careplus.com/dashboard"
                      style={{
                        backgroundColor: '#28a745',
                        color: '#ffffff',
                        padding: '18px 45px',
                        fontSize: '18px',
                        borderRadius: '10px',
                        textDecoration: 'none',
                        display: 'inline-block',
                        fontWeight: 'bold',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                        transition: 'background-color 0.3s ease',
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = '#3dbd5d')
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = '#28a745')
                      }
                    >
                      Go to Dashboard
                    </a>
                  </div>
                </td>
              </tr>

              {/* Footer Section */}
              <tr>
                <td
                  style={{
                    backgroundColor: '#222222',
                    padding: '25px',
                    textAlign: 'center',
                    borderTop: '6px solid #28a745',
                  }}
                >
                  <p
                    style={{
                      color: '#dddddd',
                      fontSize: '15px',
                      lineHeight: '1.6',
                      margin: '0',
                    }}
                  >
                    CarePlus Inc.<br />
                    123 Health Street, Wellness City<br />
                    <a
                      href="https://careplus.com"
                      style={{
                        color: '#28a745',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                      }}
                    >
                      www.careplus.com
                    </a>
                    <br />
                    &copy; 2024 CarePlus. All rights reserved.
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default AppointmentEmailTemplate;
