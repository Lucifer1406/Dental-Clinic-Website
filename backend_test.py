import requests
import sys
from datetime import datetime
import json

class DentalAPITester:
    def __init__(self, base_url="https://dental-design.preview.emergentagent.com/api"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.test_results = []

    def run_test(self, name, method, endpoint, expected_status, data=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            success = response.status_code == expected_status
            
            result = {
                'test': name,
                'method': method,
                'endpoint': endpoint,
                'expected_status': expected_status,
                'actual_status': response.status_code,
                'success': success,
                'response_data': None,
                'error': None
            }

            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    result['response_data'] = response.json()
                    print(f"   Response: {json.dumps(result['response_data'], indent=2)[:200]}...")
                except:
                    result['response_data'] = response.text[:200]
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"   Response: {response.text[:200]}")
                result['error'] = response.text

            self.test_results.append(result)
            return success, response.json() if success and response.text else {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            result = {
                'test': name,
                'method': method,
                'endpoint': endpoint,
                'expected_status': expected_status,
                'actual_status': None,
                'success': False,
                'response_data': None,
                'error': str(e)
            }
            self.test_results.append(result)
            return False, {}

    def test_root_endpoint(self):
        """Test the API root endpoint"""
        return self.run_test("API Root", "GET", "", 200)

    def test_contact_submission(self):
        """Test contact form submission"""
        contact_data = {
            "name": "Test User",
            "email": "test@example.com", 
            "message": "This is a test message from automated testing"
        }
        
        success, response = self.run_test(
            "Contact Form Submission",
            "POST",
            "contact",
            200,  # FastAPI returns 200 for successful POST with response_model
            data=contact_data
        )
        
        if success:
            # Validate response structure
            required_fields = ['id', 'name', 'email', 'message', 'timestamp']
            missing_fields = [field for field in required_fields if field not in response]
            if missing_fields:
                print(f"⚠️  Missing fields in response: {missing_fields}")
            else:
                print(f"✅ Contact submission response has all required fields")
        
        return success, response

    def test_appointment_booking(self):
        """Test appointment booking"""
        appointment_data = {
            "name": "Test Patient",
            "email": "patient@example.com",
            "phone": "+91 9876543210",
            "date": "2025-01-15",
            "time": "10:30",
            "service": "Implants",
            "message": "Test appointment booking"
        }
        
        success, response = self.run_test(
            "Appointment Booking",
            "POST",
            "appointments",
            200,
            data=appointment_data
        )
        
        if success:
            # Validate response structure
            required_fields = ['id', 'name', 'email', 'phone', 'date', 'time', 'service', 'timestamp']
            missing_fields = [field for field in required_fields if field not in response]
            if missing_fields:
                print(f"⚠️  Missing fields in response: {missing_fields}")
            else:
                print(f"✅ Appointment booking response has all required fields")
        
        return success, response

    def test_get_contacts(self):
        """Test retrieving contacts"""
        return self.run_test("Get Contacts", "GET", "contact", 200)

    def test_get_appointments(self):
        """Test retrieving appointments"""
        return self.run_test("Get Appointments", "GET", "appointments", 200)

    def test_invalid_contact_data(self):
        """Test contact submission with invalid data"""
        invalid_data = {
            "name": "Test",
            "email": "invalid-email",  # Invalid email format
            "message": ""
        }
        
        # Should return 422 for validation error
        return self.run_test(
            "Invalid Contact Data",
            "POST", 
            "contact",
            422,
            data=invalid_data
        )

    def test_invalid_appointment_data(self):
        """Test appointment booking with missing required fields"""
        invalid_data = {
            "name": "Test",
            # Missing required fields
        }
        
        return self.run_test(
            "Invalid Appointment Data",
            "POST",
            "appointments", 
            422,
            data=invalid_data
        )

def main():
    print("🚀 Starting Dentis3 Care Backend API Testing")
    print("=" * 50)
    
    tester = DentalAPITester()
    
    # Run all tests
    tests = [
        tester.test_root_endpoint,
        tester.test_contact_submission,
        tester.test_appointment_booking,
        tester.test_get_contacts,
        tester.test_get_appointments,
        tester.test_invalid_contact_data,
        tester.test_invalid_appointment_data
    ]
    
    for test in tests:
        try:
            test()
        except Exception as e:
            print(f"❌ Test failed with exception: {str(e)}")
    
    # Print final results
    print("\n" + "=" * 50)
    print(f"📊 Test Results: {tester.tests_passed}/{tester.tests_run} tests passed")
    
    success_rate = (tester.tests_passed / tester.tests_run * 100) if tester.tests_run > 0 else 0
    print(f"📈 Success Rate: {success_rate:.1f}%")
    
    # Show failed tests
    failed_tests = [result for result in tester.test_results if not result['success']]
    if failed_tests:
        print(f"\n❌ Failed Tests ({len(failed_tests)}):")
        for test in failed_tests:
            print(f"   • {test['test']}: {test.get('error', f'Expected {test['expected_status']}, got {test['actual_status']}')}")
    
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())