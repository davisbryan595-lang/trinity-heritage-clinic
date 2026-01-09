'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Field, FieldContent, FieldDescription, FieldGroup, FieldLabel, FieldLegend } from '@/components/ui/field'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const patientIntakeSchema = z.object({
  // Demographics
  firstName: z.string().min(1, 'First name is required'),
  middleName: z.string().optional(),
  lastName: z.string().min(1, 'Last name is required'),
  dateOfBirth: z.string().min(1, 'Date of birth is required'),
  address: z.string().min(1, 'Address is required'),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(1, 'State is required'),
  zipCode: z.string().min(1, 'Zip code is required'),
  email: z.string().email('Invalid email address'),
  cellPhone: z.string().min(1, 'Cell phone is required'),
  homePhone: z.string().optional(),
  workPhone: z.string().optional(),
  sex: z.enum(['male', 'female'], { errorMap: () => ({ message: 'Sex is required' }) }),
  ssn: z.string().optional(),
  employmentStatus: z.array(z.enum(['fullTime', 'partTime', 'retired', 'disabled'])).optional(),
  maritalStatus: z.enum(['single', 'married', 'divorced', 'widowed']).optional(),
  howHeardAboutUs: z.string().optional(),
  emergencyContactName: z.string().optional(),
  emergencyContactRelationship: z.string().optional(),
  emergencyContactPhone: z.string().optional(),
  pharmacyName: z.string().optional(),
  pharmacyAddress: z.string().optional(),
  ethnicity: z.array(z.enum(['asian', 'black', 'caucasian', 'hispanic', 'other'])).optional(),
  ethnicityOther: z.string().optional(),

  // Insurance
  primaryInsurance: z.string().optional(),
  primaryMemberId: z.string().optional(),
  primaryPolicyHolder: z.string().optional(),
  primaryPolicyHolderDob: z.string().optional(),
  primaryGroupNumber: z.string().optional(),
  secondaryInsurance: z.string().optional(),
  secondaryMemberId: z.string().optional(),
  secondaryPolicyHolder: z.string().optional(),
  secondaryPolicyHolderDob: z.string().optional(),
  secondaryGroupNumber: z.string().optional(),

  // Other Providers
  otherProviders: z.array(z.object({
    use: z.boolean().optional(),
    type: z.string().optional(),
    name: z.string().optional(),
    office: z.string().optional(),
  })).optional(),

  // Medical History
  noMedicalHistory: z.boolean().optional(),
  medicalHistoryConditions: z.array(z.string()).optional(),
  otherMedicalHistory: z.string().optional(),

  // Family History
  familyHistory: z.record(z.array(z.string())).optional(),

  // Medications
  medicationReminder: z.boolean().optional(),
  medications: z.array(z.object({
    name: z.string().optional(),
    dosage: z.string().optional(),
    timesPerDay: z.string().optional(),
  })).optional(),

  // Medication Allergies
  noKnownAllergies: z.boolean().optional(),
  medicationAllergies: z.array(z.object({
    medication: z.string().optional(),
    reaction: z.string().optional(),
    age: z.string().optional(),
  })).optional(),

  // Hospitalizations
  hospitalizations: z.array(z.object({
    reason: z.string().optional(),
    year: z.string().optional(),
  })).optional(),

  // Surgical History
  surgicalHistory: z.record(z.object({
    done: z.boolean().optional(),
    date: z.string().optional(),
  })).optional(),

  // Social History
  fallsInPast12Months: z.boolean().optional(),
  fallsCount: z.string().optional(),
  hasLivingWill: z.boolean().optional(),
  interestedInLivingWill: z.boolean().optional(),
  livingArrangements: z.array(z.string()).optional(),
  sexuallyActive: z.boolean().optional(),
  sexPartnerType: z.string().optional(),
  numberOfPartners: z.string().optional(),
  usesProtection: z.boolean().optional(),
  abnormalPapSmear: z.boolean().optional(),
  abnormalMammogram: z.boolean().optional(),
  lastMenstrualPeriod: z.string().optional(),
  usesContraception: z.boolean().optional(),
  contraceptionType: z.string().optional(),

  // Depression Screening
  littleInterestFrequency: z.string().optional(),
  depressedMoodFrequency: z.string().optional(),

  // Alcohol and Drug History
  alcoholFrequency: z.string().optional(),
  drinksPerDay: z.string().optional(),
  sixDrinksFrequency: z.string().optional(),
  currentSmoker: z.boolean().optional(),
  cigarettesPerDay: z.string().optional(),
  smokingYears: z.string().optional(),
  formerSmoker: z.boolean().optional(),
  quitYear: z.string().optional(),
  formerSmokingAmount: z.string().optional(),
  formerSmokingYears: z.string().optional(),
  usedStreetDrugs: z.boolean().optional(),
  streetDrugsSpecify: z.string().optional(),

  // Preventive Tests
  preventiveTests: z.record(z.string()).optional(),
  vaccines: z.record(z.string()).optional(),
})

type PatientIntakeFormData = z.infer<typeof patientIntakeSchema>

export default function PatientIntakePage() {
  const [currentPage, setCurrentPage] = useState(0)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [hasSavedData, setHasSavedData] = useState(false)

  const form = useForm<PatientIntakeFormData>({
    resolver: zodResolver(patientIntakeSchema),
    mode: 'onBlur',
    defaultValues: {
      employmentStatus: [],
      ethnicity: [],
      medicalHistoryConditions: [],
      livingArrangements: [],
      medications: [{}, {}, {}],
      medicationAllergies: [{}, {}],
      hospitalizations: [{}, {}, {}],
      otherProviders: [{}, {}, {}, {}, {}],
    },
  })

  // Load saved data on mount
  useEffect(() => {
    const savedData = localStorage.getItem('patientIntakeFormData')
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData)
        form.reset(parsedData)
        setHasSavedData(true)
      } catch (error) {
        console.error('Error loading saved form data:', error)
      }
    }
  }, [])

  // Auto-save form data to localStorage
  useEffect(() => {
    const subscription = form.watch((data) => {
      localStorage.setItem('patientIntakeFormData', JSON.stringify(data))
    })
    return () => subscription.unsubscribe()
  }, [form])

  const onSubmit = async (data: PatientIntakeFormData) => {
    try {
      const response = await fetch('/api/patient-intake', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        localStorage.removeItem('patientIntakeFormData')
        setIsSubmitted(true)
      } else {
        alert('Error submitting form. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Error submitting form. Please try again.')
    }
  }

  const pages = [
    <Page1Demographics key="page1" form={form} />,
    <Page2History key="page2" form={form} />,
    <Page3MedicationsAllergies key="page3" form={form} />,
    <Page4SurgicalSocial key="page4" form={form} />,
    <Page5ScreeningTests key="page5" form={form} />,
  ]

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-primary/5 pt-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Card className="p-8 text-center">
            <h1 className="text-4xl font-bold text-green-600 mb-4">Thank You!</h1>
            <p className="text-lg text-muted-foreground mb-8">Your patient intake form has been submitted successfully.</p>
            <p className="text-muted-foreground mb-8">Our team will review your information and contact you soon to schedule your appointment.</p>
            <Button onClick={() => {
              setIsSubmitted(false)
              setCurrentPage(0)
              setHasSavedData(false)
              form.reset()
            }}>
              Submit Another Form
            </Button>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-primary/5 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="font-serif text-4xl font-bold text-primary-foreground mb-2">New Patient Intake Form</h1>
              <p className="text-muted-foreground">Trinity Heritage Healthcare Clinic</p>
            </div>
            {hasSavedData && (
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  localStorage.removeItem('patientIntakeFormData')
                  form.reset()
                  setHasSavedData(false)
                  setCurrentPage(0)
                }}
                className="text-sm"
              >
                Start Over
              </Button>
            )}
          </div>
          {hasSavedData && (
            <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm text-green-700">
                ✓ Your form data is being automatically saved
              </p>
            </div>
          )}
          <div className="bg-primary/10 px-4 py-2 rounded-lg border border-primary/20">
            <p className="text-sm text-muted-foreground">
              Page {currentPage + 1} of {pages.length}
            </p>
            <div className="mt-2 w-full bg-primary/20 rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentPage + 1) / pages.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {pages[currentPage]}

            {/* Navigation */}
            <div className="flex gap-4 justify-between pt-8">
              <Button
                type="button"
                variant="outline"
                onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                disabled={currentPage === 0}
                className="gap-2"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </Button>

              {currentPage === pages.length - 1 ? (
                <Button type="submit" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Submit Form
                </Button>
              ) : (
                <Button
                  type="button"
                  onClick={() => setCurrentPage(Math.min(pages.length - 1, currentPage + 1))}
                  className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </Button>
              )}
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}

// PAGE 1: DEMOGRAPHICS AND INSURANCE
function Page1Demographics({ form }: { form: any }) {
  return (
    <Card className="p-8 space-y-8">
      <div>
        <h2 className="font-serif text-2xl font-bold text-primary-foreground mb-6">Demographics</h2>
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="First Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="middleName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Middle Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Middle Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Last Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="dateOfBirth"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date of Birth</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ssn"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Social Security Number</FormLabel>
                  <FormControl>
                    <Input placeholder="XXX-XX-XXXX" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input placeholder="Street Address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input placeholder="City" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>State</FormLabel>
                  <FormControl>
                    <Input placeholder="TX" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="zipCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Zip Code</FormLabel>
                  <FormControl>
                    <Input placeholder="76063" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="email@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cellPhone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cell Phone</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="(XXX) XXX-XXXX" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="homePhone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Home Phone</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="(XXX) XXX-XXXX" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="workPhone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Work Phone</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="(XXX) XXX-XXXX" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="sex"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sex</FormLabel>
                  <FormControl>
                    <RadioGroup value={field.value} onValueChange={field.onChange}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="male" id="male" />
                        <Label htmlFor="male">Male</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="female" />
                        <Label htmlFor="female">Female</Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="maritalStatus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Marital Status</FormLabel>
                  <FormControl>
                    <RadioGroup value={field.value} onValueChange={field.onChange}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="single" id="single" />
                        <Label htmlFor="single">Single</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="married" id="married" />
                        <Label htmlFor="married">Married</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="divorced" id="divorced" />
                        <Label htmlFor="divorced">Divorced</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="widowed" id="widowed" />
                        <Label htmlFor="widowed">Widowed</Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="howHeardAboutUs"
            render={({ field }) => (
              <FormItem>
                <FormLabel>How did you hear about us?</FormLabel>
                <FormControl>
                  <Input placeholder="Reference source" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="pt-4 border-t">
            <h3 className="font-semibold text-primary-foreground mb-4">Employment Status</h3>
            <div className="space-y-2">
              {['fullTime', 'partTime', 'retired', 'disabled'].map((status) => (
                <div key={status} className="flex items-center space-x-2">
                  <FormField
                    control={form.control}
                    name="employmentStatus"
                    render={({ field }) => (
                      <Checkbox
                        id={status}
                        checked={field.value?.includes(status as any)}
                        onCheckedChange={(checked) => {
                          const current = field.value || []
                          if (checked) {
                            field.onChange([...current, status])
                          } else {
                            field.onChange(current.filter((item) => item !== status))
                          }
                        }}
                      />
                    )}
                  />
                  <Label htmlFor={status} className="capitalize cursor-pointer">
                    {status === 'fullTime' ? 'Full Time' : status === 'partTime' ? 'Part Time' : status.charAt(0).toUpperCase() + status.slice(1)}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="font-serif text-2xl font-bold text-primary-foreground mb-6">Emergency Contact</h2>
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="emergencyContactName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Emergency Contact Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="emergencyContactRelationship"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Relationship</FormLabel>
                  <FormControl>
                    <Input placeholder="Relationship" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="emergencyContactPhone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="(XXX) XXX-XXXX" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
      </div>

      <div>
        <h2 className="font-serif text-2xl font-bold text-primary-foreground mb-6">Pharmacy Information</h2>
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="pharmacyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pharmacy Name</FormLabel>
                <FormControl>
                  <Input placeholder="Pharmacy Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="pharmacyAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pharmacy Address or Intersection</FormLabel>
                <FormControl>
                  <Input placeholder="Address or Intersection" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="ethnicity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ethnicity</FormLabel>
                <div className="space-y-2">
                  {[
                    { id: 'asian', label: 'Asian' },
                    { id: 'black', label: 'Black or African American' },
                    { id: 'caucasian', label: 'Caucasian' },
                    { id: 'hispanic', label: 'Hispanic' },
                  ].map((eth) => (
                    <div key={eth.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={eth.id}
                        checked={field.value?.includes(eth.id as any)}
                        onCheckedChange={(checked) => {
                          const current = field.value || []
                          if (checked) {
                            field.onChange([...current, eth.id])
                          } else {
                            field.onChange(current.filter((item) => item !== eth.id))
                          }
                        }}
                      />
                      <Label htmlFor={eth.id} className="cursor-pointer">
                        {eth.label}
                      </Label>
                    </div>
                  ))}
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="other"
                      checked={field.value?.includes('other' as any)}
                      onCheckedChange={(checked) => {
                        const current = field.value || []
                        if (checked) {
                          field.onChange([...current, 'other'])
                        } else {
                          field.onChange(current.filter((item) => item !== 'other'))
                        }
                      }}
                    />
                    <Label htmlFor="other" className="cursor-pointer">
                      Other
                    </Label>
                  </div>
                  {field.value?.includes('other') && (
                    <FormField
                      control={form.control}
                      name="ethnicityOther"
                      render={({ field: otherField }) => (
                        <FormControl>
                          <Input placeholder="Please specify" {...otherField} />
                        </FormControl>
                      )}
                    />
                  )}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>

      <div>
        <h2 className="font-serif text-2xl font-bold text-primary-foreground mb-6">Insurance Information</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-primary-foreground mb-4">Primary Insurance</h3>
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="primaryInsurance"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Insurance Company</FormLabel>
                    <FormControl>
                      <Input placeholder="Insurance Company Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="primaryMemberId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Member ID</FormLabel>
                      <FormControl>
                        <Input placeholder="Member ID" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="primaryGroupNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Group Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Group Number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="primaryPolicyHolder"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Policy Holder Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Full Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="primaryPolicyHolderDob"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Policy Holder DOB</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>

          <div className="pt-4 border-t">
            <h3 className="font-semibold text-primary-foreground mb-4">Secondary Insurance</h3>
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="secondaryInsurance"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Insurance Company</FormLabel>
                    <FormControl>
                      <Input placeholder="Insurance Company Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="secondaryMemberId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Member ID</FormLabel>
                      <FormControl>
                        <Input placeholder="Member ID" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="secondaryGroupNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Group Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Group Number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="secondaryPolicyHolder"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Policy Holder Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Full Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="secondaryPolicyHolderDob"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Policy Holder DOB</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="font-serif text-2xl font-bold text-primary-foreground mb-6">Other Healthcare Providers</h2>
        <p className="text-muted-foreground text-sm mb-4">List any other healthcare providers you regularly see</p>
        <div className="space-y-4">
          {[0, 1, 2, 3, 4].map((index) => (
            <div key={index} className="p-4 border rounded-lg space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <FormField
                  control={form.control}
                  name={`otherProviders.${index}.type`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Type of Practitioner</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., PCP, Cardiologist" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`otherProviders.${index}.name`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Provider Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name={`otherProviders.${index}.office`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Office Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Office Address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}

// PAGE 2: MEDICAL HISTORY AND FAMILY HISTORY
function Page2History({ form }: { form: any }) {
  return (
    <Card className="p-8 space-y-8">
      <div>
        <h2 className="font-serif text-2xl font-bold text-primary-foreground mb-6">Personal Medical History</h2>
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="noMedicalHistory"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-2">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} id="noHistory" />
                </FormControl>
                <FormLabel htmlFor="noHistory" className="cursor-pointer">
                  I have no past medical history
                </FormLabel>
              </FormItem>
            )}
          />

          {!form.watch('noMedicalHistory') && (
            <div className="space-y-3 pt-4 border-t">
              <p className="text-sm text-muted-foreground">Check all that apply:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  { label: 'Arthritis', value: 'arthritis' },
                  { label: 'Asthma', value: 'asthma' },
                  { label: 'High Blood Pressure', value: 'hypertension' },
                  { label: 'High Cholesterol', value: 'highCholesterol' },
                  { label: 'Diabetes', value: 'diabetes' },
                  { label: 'Heart Disease', value: 'heartDisease' },
                  { label: 'Thyroid Problems', value: 'thyroidProblems' },
                  { label: 'Anxiety/Depression', value: 'anxietyDepression' },
                  { label: 'Kidney Disease', value: 'kidneyDisease' },
                  { label: 'Liver Disease', value: 'liverDisease' },
                  { label: 'Cancer', value: 'cancer' },
                  { label: 'COPD/Emphysema', value: 'copd' },
                ].map((condition) => (
                  <div key={condition.value} className="flex items-center space-x-2">
                    <FormField
                      control={form.control}
                      name="medicalHistoryConditions"
                      render={({ field }) => (
                        <Checkbox
                          id={condition.value}
                          checked={field.value?.includes(condition.value)}
                          onCheckedChange={(checked) => {
                            const current = field.value || []
                            if (checked) {
                              field.onChange([...current, condition.value])
                            } else {
                              field.onChange(current.filter((item) => item !== condition.value))
                            }
                          }}
                        />
                      )}
                    />
                    <Label htmlFor={condition.value} className="cursor-pointer text-sm">
                      {condition.label}
                    </Label>
                  </div>
                ))}
              </div>

              <FormField
                control={form.control}
                name="otherMedicalHistory"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Other Medical History</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Please describe any other medical conditions" className="resize-none" rows={4} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          )}
        </div>
      </div>

      <div>
        <h2 className="font-serif text-2xl font-bold text-primary-foreground mb-6">Family History</h2>
        <p className="text-muted-foreground text-sm mb-6">
          Please check any conditions that run in your family. Include: Paternal Grandmother (PGM), Paternal Grandfather (PGF), Maternal Grandmother (MGM), Maternal Grandfather (MGF), and siblings.
        </p>
        <div className="space-y-4">
          {['Father', 'Mother', 'Sister', 'Brother', 'PGM', 'PGF', 'MGM', 'MGF'].map((relation) => (
            <div key={relation} className="p-4 border rounded-lg space-y-3">
              <h3 className="font-semibold text-primary-foreground">{relation}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {[
                  'High Blood Pressure',
                  'Diabetes',
                  'High Cholesterol',
                  'Heart Disease',
                  'Heart Attack',
                  'Stroke',
                  'Depression/Anxiety',
                  'Cancer',
                  'Kidney Disease',
                  'COPD/Emphysema',
                ].map((condition) => (
                  <div key={condition} className="flex items-center space-x-2">
                    <FormField
                      control={form.control}
                      name={`familyHistory.${relation}`}
                      render={({ field }) => (
                        <Checkbox
                          id={`${relation}-${condition}`}
                          checked={(field.value as any)?.includes?.(condition)}
                          onCheckedChange={(checked) => {
                            const current = (field.value as any) || []
                            if (checked) {
                              field.onChange([...current, condition])
                            } else {
                              field.onChange(current.filter((item: string) => item !== condition))
                            }
                          }}
                        />
                      )}
                    />
                    <Label htmlFor={`${relation}-${condition}`} className="cursor-pointer text-sm">
                      {condition}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}

// PAGE 3: MEDICATIONS AND ALLERGIES
function Page3MedicationsAllergies({ form }: { form: any }) {
  return (
    <Card className="p-8 space-y-8">
      <div>
        <h2 className="font-serif text-2xl font-bold text-primary-foreground mb-6">Current Medications</h2>
        <p className="text-muted-foreground text-sm mb-4">Please list all medications you are currently taking. If you have more than 10, please attach a list.</p>

        <div className="mb-4">
          <FormField
            control={form.control}
            name="medicationReminder"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-2">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} id="medReminder" />
                </FormControl>
                <FormLabel htmlFor="medReminder" className="cursor-pointer">
                  Do you have problems remembering to take your medications?
                </FormLabel>
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-3">
          {[0, 1, 2, 3, 4].map((index) => (
            <div key={index} className="p-4 border rounded-lg grid grid-cols-3 gap-3">
              <FormField
                control={form.control}
                name={`medications.${index}.name`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm">Medication Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Medication Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`medications.${index}.dosage`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm">Dosage</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., 10mg" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`medications.${index}.timesPerDay`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm">Times Per Day</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="1, 2, 3, etc." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-serif text-2xl font-bold text-primary-foreground mb-6">Medication Allergies</h2>
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="noKnownAllergies"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-2">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} id="noAllergies" />
                </FormControl>
                <FormLabel htmlFor="noAllergies" className="cursor-pointer">
                  No Known Allergies (NKA)
                </FormLabel>
              </FormItem>
            )}
          />

          {!form.watch('noKnownAllergies') && (
            <div className="space-y-3 pt-4 border-t">
              {[0, 1, 2].map((index) => (
                <div key={index} className="p-4 border rounded-lg grid grid-cols-3 gap-3">
                  <FormField
                    control={form.control}
                    name={`medicationAllergies.${index}.medication`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm">Medication Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Medication Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`medicationAllergies.${index}.reaction`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm">Reaction</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Rash, Hives" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`medicationAllergies.${index}.age`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm">Age When Occurred</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="Age" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div>
        <h2 className="font-serif text-2xl font-bold text-primary-foreground mb-6">Hospitalizations</h2>
        <p className="text-muted-foreground text-sm mb-4">Have you had any significant hospitalizations?</p>
        <div className="space-y-3">
          {[0, 1, 2].map((index) => (
            <div key={index} className="p-4 border rounded-lg grid grid-cols-2 gap-3">
              <FormField
                control={form.control}
                name={`hospitalizations.${index}.reason`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm">Reason for Hospitalization</FormLabel>
                    <FormControl>
                      <Input placeholder="Reason" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`hospitalizations.${index}.year`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm">Year</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="YYYY" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}

// PAGE 4: SURGICAL AND SOCIAL HISTORY
function Page4SurgicalSocial({ form }: { form: any }) {
  return (
    <Card className="p-8 space-y-8">
      <div>
        <h2 className="font-serif text-2xl font-bold text-primary-foreground mb-6">Surgical History</h2>
        <p className="text-muted-foreground text-sm mb-4">Check procedures you have had and provide the date if known</p>
        <div className="space-y-3">
          {[
            'Appendectomy',
            'Knee Replacement',
            'Hip Replacement',
            'Back Surgery',
            'Cataract Extraction',
            'Gallbladder Removal',
            'Mastectomy',
            'Hysterectomy',
            'Cardiac Stent/Angioplasty',
            'Heart Bypass',
            'Other',
          ].map((surgery) => (
            <div key={surgery} className="p-3 border rounded-lg flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <FormField
                  control={form.control}
                  name={`surgicalHistory.${surgery}.done`}
                  render={({ field }) => (
                    <Checkbox
                      id={`surgery-${surgery}`}
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  )}
                />
                <Label htmlFor={`surgery-${surgery}`} className="cursor-pointer">
                  {surgery}
                </Label>
              </div>
              {form.watch(`surgicalHistory.${surgery}.done`) && (
                <FormField
                  control={form.control}
                  name={`surgicalHistory.${surgery}.date`}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input type="date" {...field} className="w-40" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-serif text-2xl font-bold text-primary-foreground mb-6">Social History</h2>
        <div className="space-y-6">
          <FormField
            control={form.control}
            name="fallsInPast12Months"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Have you experienced a fall in the past 12 months?</FormLabel>
                <FormControl>
                  <RadioGroup value={field.value ? 'yes' : 'no'} onValueChange={(val) => field.onChange(val === 'yes')}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="falls-yes" />
                      <Label htmlFor="falls-yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="falls-no" />
                      <Label htmlFor="falls-no">No</Label>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {form.watch('fallsInPast12Months') && (
            <FormField
              control={form.control}
              name="fallsCount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How many times have you fallen?</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Number of falls" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <div className="pt-4 border-t">
            <FormField
              control={form.control}
              name="hasLivingWill"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Do you have a Living Will/Durable Power of Attorney?</FormLabel>
                  <FormControl>
                    <RadioGroup value={field.value ? 'yes' : 'no'} onValueChange={(val) => field.onChange(val === 'yes')}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="will-yes" />
                        <Label htmlFor="will-yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="will-no" />
                        <Label htmlFor="will-no">No</Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {!form.watch('hasLivingWill') && (
              <div className="mt-4 p-3 bg-accent/10 rounded-lg border border-accent/20">
                <FormField
                  control={form.control}
                  name="interestedInLivingWill"
                  render={({ field }) => (
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} id="interestedWill" />
                      </FormControl>
                      <Label htmlFor="interestedWill" className="cursor-pointer">
                        I am interested in completing a Living Will
                      </Label>
                    </FormItem>
                  )}
                />
              </div>
            )}
          </div>

          <div className="pt-4 border-t">
            <FormField
              control={form.control}
              name="livingArrangements"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Living Arrangements (check all that apply)</FormLabel>
                  <div className="space-y-2">
                    {[
                      { id: 'spouse', label: 'I live with my spouse/partner' },
                      { id: 'alone', label: 'I live alone' },
                      { id: 'aloneWithSupport', label: 'I live alone but have friends who check on me regularly' },
                      { id: 'familyClose', label: 'I have family close by who can help me' },
                      { id: 'assistedLiving', label: 'Assisted Living/Group Home' },
                      { id: 'nursingHome', label: 'Nursing Home' },
                    ].map((arrangement) => (
                      <div key={arrangement.id} className="flex items-center space-x-2">
                        <FormField
                          control={form.control}
                          name="livingArrangements"
                          render={({ field }) => (
                            <Checkbox
                              id={arrangement.id}
                              checked={field.value?.includes(arrangement.id)}
                              onCheckedChange={(checked) => {
                                const current = field.value || []
                                if (checked) {
                                  field.onChange([...current, arrangement.id])
                                } else {
                                  field.onChange(current.filter((item) => item !== arrangement.id))
                                }
                              }}
                            />
                          )}
                        />
                        <Label htmlFor={arrangement.id} className="cursor-pointer">
                          {arrangement.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </FormItem>
              )}
            />
          </div>

          <div className="pt-4 border-t space-y-4">
            <FormField
              control={form.control}
              name="sexuallyActive"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Are you sexually active?</FormLabel>
                  <FormControl>
                    <RadioGroup value={field.value ? 'yes' : 'no'} onValueChange={(val) => field.onChange(val === 'yes')}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="sex-active-yes" />
                        <Label htmlFor="sex-active-yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="sex-active-no" />
                        <Label htmlFor="sex-active-no">No</Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {form.watch('sexuallyActive') && (
              <>
                <FormField
                  control={form.control}
                  name="sexPartnerType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Type of Partners</FormLabel>
                      <FormControl>
                        <RadioGroup value={field.value} onValueChange={field.onChange}>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="men" id="partner-men" />
                            <Label htmlFor="partner-men">Men only</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="women" id="partner-women" />
                            <Label htmlFor="partner-women">Women only</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="both" id="partner-both" />
                            <Label htmlFor="partner-both">Both men and women</Label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="numberOfPartners"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Number of partners in the last 12 months</FormLabel>
                      <FormControl>
                        <RadioGroup value={field.value} onValueChange={field.onChange}>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="1" id="partners-1" />
                            <Label htmlFor="partners-1">1</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="2" id="partners-2" />
                            <Label htmlFor="partners-2">2</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="3" id="partners-3" />
                            <Label htmlFor="partners-3">3</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="more-than-3" id="partners-more" />
                            <Label htmlFor="partners-more">More than 3</Label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="usesProtection"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Do you always use protection?</FormLabel>
                      <FormControl>
                        <RadioGroup value={field.value ? 'yes' : 'no'} onValueChange={(val) => field.onChange(val === 'yes')}>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="yes" id="protection-yes" />
                            <Label htmlFor="protection-yes">Yes</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="no" id="protection-no" />
                            <Label htmlFor="protection-no">No</Label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}
          </div>

          <div className="pt-4 border-t space-y-4 bg-accent/5 p-4 rounded-lg">
            <p className="font-semibold text-primary-foreground">Women Only</p>
            <FormField
              control={form.control}
              name="abnormalPapSmear"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Have you ever had an abnormal pap smear?</FormLabel>
                  <FormControl>
                    <RadioGroup value={field.value ? 'yes' : 'no'} onValueChange={(val) => field.onChange(val === 'yes')}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="pap-yes" />
                        <Label htmlFor="pap-yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="pap-no" />
                        <Label htmlFor="pap-no">No</Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="abnormalMammogram"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Have you ever had an abnormal mammogram?</FormLabel>
                  <FormControl>
                    <RadioGroup value={field.value ? 'yes' : 'no'} onValueChange={(val) => field.onChange(val === 'yes')}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="mammo-yes" />
                        <Label htmlFor="mammo-yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="mammo-no" />
                        <Label htmlFor="mammo-no">No</Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lastMenstrualPeriod"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>When was your last menstrual period?</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="usesContraception"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Do you use contraception?</FormLabel>
                  <FormControl>
                    <RadioGroup value={field.value ? 'yes' : 'no'} onValueChange={(val) => field.onChange(val === 'yes')}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="contra-yes" />
                        <Label htmlFor="contra-yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="contra-no" />
                        <Label htmlFor="contra-no">No</Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {form.watch('usesContraception') && (
              <FormField
                control={form.control}
                name="contraceptionType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type of Contraception</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Birth control, IUD, etc." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
          </div>
        </div>
      </div>
    </Card>
  )
}

// PAGE 5: DEPRESSION SCREENING, ALCOHOL/DRUG HISTORY, PREVENTIVE TESTS
function Page5ScreeningTests({ form }: { form: any }) {
  return (
    <Card className="p-8 space-y-8">
      <div>
        <h2 className="font-serif text-2xl font-bold text-primary-foreground mb-6">Depression Screening</h2>
        <p className="text-muted-foreground text-sm mb-4">Over the last 2 weeks, how often have you been bothered by any of the following problems?</p>
        <div className="space-y-6">
          <FormField
            control={form.control}
            name="littleInterestFrequency"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Little interest or pleasure in doing things</FormLabel>
                <FormControl>
                  <RadioGroup value={field.value} onValueChange={field.onChange}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="notAtAll" id="interest-0" />
                      <Label htmlFor="interest-0">Not at all</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="severalDays" id="interest-1" />
                      <Label htmlFor="interest-1">Several days</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="halfDays" id="interest-2" />
                      <Label htmlFor="interest-2">More than half the days</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="everyday" id="interest-3" />
                      <Label htmlFor="interest-3">Nearly every day</Label>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="depressedMoodFrequency"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Feeling down, depressed, or hopeless</FormLabel>
                <FormControl>
                  <RadioGroup value={field.value} onValueChange={field.onChange}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="notAtAll" id="mood-0" />
                      <Label htmlFor="mood-0">Not at all</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="severalDays" id="mood-1" />
                      <Label htmlFor="mood-1">Several days</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="halfDays" id="mood-2" />
                      <Label htmlFor="mood-2">More than half the days</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="everyday" id="mood-3" />
                      <Label htmlFor="mood-3">Nearly every day</Label>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>

      <div>
        <h2 className="font-serif text-2xl font-bold text-primary-foreground mb-6">Alcohol and Drug History</h2>
        <div className="space-y-6">
          <FormField
            control={form.control}
            name="alcoholFrequency"
            render={({ field }) => (
              <FormItem>
                <FormLabel>How often do you have a drink containing alcohol?</FormLabel>
                <FormControl>
                  <RadioGroup value={field.value} onValueChange={field.onChange}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="never" id="alcohol-0" />
                      <Label htmlFor="alcohol-0">Never</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="monthlyOrLess" id="alcohol-1" />
                      <Label htmlFor="alcohol-1">Monthly or less</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="2to4Month" id="alcohol-2" />
                      <Label htmlFor="alcohol-2">2-4 times a month</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="2to3Week" id="alcohol-3" />
                      <Label htmlFor="alcohol-3">2-3 times a week</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="4orMoreWeek" id="alcohol-4" />
                      <Label htmlFor="alcohol-4">4 or more times a week</Label>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="drinksPerDay"
            render={({ field }) => (
              <FormItem>
                <FormLabel>How many standard drinks do you have on a typical day when drinking?</FormLabel>
                <FormControl>
                  <RadioGroup value={field.value} onValueChange={field.onChange}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="1to2" id="drinks-0" />
                      <Label htmlFor="drinks-0">1-2</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="3to4" id="drinks-1" />
                      <Label htmlFor="drinks-1">3-4</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="5to6" id="drinks-2" />
                      <Label htmlFor="drinks-2">5-6</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="7to9" id="drinks-3" />
                      <Label htmlFor="drinks-3">7-9</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="10orMore" id="drinks-4" />
                      <Label htmlFor="drinks-4">10 or more</Label>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="sixDrinksFrequency"
            render={({ field }) => (
              <FormItem>
                <FormLabel>How often do you have six or more drinks on one occasion?</FormLabel>
                <FormControl>
                  <RadioGroup value={field.value} onValueChange={field.onChange}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="never" id="six-0" />
                      <Label htmlFor="six-0">Never</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="lessThanMonthly" id="six-1" />
                      <Label htmlFor="six-1">Less than monthly</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="monthly" id="six-2" />
                      <Label htmlFor="six-2">Monthly</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="weekly" id="six-3" />
                      <Label htmlFor="six-3">Weekly</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="daily" id="six-4" />
                      <Label htmlFor="six-4">Almost daily</Label>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="pt-4 border-t space-y-4">
            <FormField
              control={form.control}
              name="currentSmoker"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Do you currently smoke?</FormLabel>
                  <FormControl>
                    <RadioGroup value={field.value ? 'yes' : 'no'} onValueChange={(val) => field.onChange(val === 'yes')}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="smoke-yes" />
                        <Label htmlFor="smoke-yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="smoke-no" />
                        <Label htmlFor="smoke-no">No</Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {form.watch('currentSmoker') && (
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="cigarettesPerDay"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cigarettes per day</FormLabel>
                      <FormControl>
                        <Input placeholder="Number of cigarettes" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="smokingYears"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Years smoking</FormLabel>
                      <FormControl>
                        <Input placeholder="Number of years" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}
          </div>

          <div className="pt-4 border-t space-y-4">
            <FormField
              control={form.control}
              name="formerSmoker"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Are you a former smoker?</FormLabel>
                  <FormControl>
                    <RadioGroup value={field.value ? 'yes' : 'no'} onValueChange={(val) => field.onChange(val === 'yes')}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="former-yes" />
                        <Label htmlFor="former-yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="former-no" />
                        <Label htmlFor="former-no">No</Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {form.watch('formerSmoker') && (
              <div className="grid grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="quitYear"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Year quit</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="YYYY" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="formerSmokingAmount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Packs per day</FormLabel>
                      <FormControl>
                        <Input placeholder="Packs/day" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="formerSmokingYears"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Years smoked</FormLabel>
                      <FormControl>
                        <Input placeholder="Number of years" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}
          </div>

          <div className="pt-4 border-t space-y-4">
            <FormField
              control={form.control}
              name="usedStreetDrugs"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Have you ever used street drugs?</FormLabel>
                  <FormControl>
                    <RadioGroup value={field.value ? 'yes' : 'no'} onValueChange={(val) => field.onChange(val === 'yes')}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="drugs-yes" />
                        <Label htmlFor="drugs-yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="drugs-no" />
                        <Label htmlFor="drugs-no">No</Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {form.watch('usedStreetDrugs') && (
              <FormField
                control={form.control}
                name="streetDrugsSpecify"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What drugs?</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Please specify" className="resize-none" rows={3} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
          </div>
        </div>
      </div>

      <div>
        <h2 className="font-serif text-2xl font-bold text-primary-foreground mb-6">Preventive Tests</h2>
        <p className="text-muted-foreground text-sm mb-4">Have you had any of the following tests? If yes, enter the date.</p>
        <div className="space-y-3">
          {[
            'Eye Exam',
            'Cholesterol Test',
            'Sleep Study',
            'Stool Blood Test',
            'Colonoscopy',
            'Bone Density Scan',
            'Heart Stress Test',
            'Prostate Exam',
            'PSA Test',
          ].map((test) => (
            <div key={test} className="p-3 border rounded-lg flex items-center justify-between gap-4">
              <Label className="cursor-pointer flex-1">{test}</Label>
              <FormField
                control={form.control}
                name={`preventiveTests.${test}`}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type="date" {...field} className="w-40" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-serif text-2xl font-bold text-primary-foreground mb-6">Vaccinations</h2>
        <div className="space-y-3">
          {[
            'Tdap (Tetanus)',
            'Pneumovax',
            'Prevnar 13',
            'Influenza (Flu Shot)',
            'Zostavax (Shingles)',
            'Hepatitis B Vaccine',
            'Mammogram',
            'Pap Smear',
          ].map((vaccine) => (
            <div key={vaccine} className="p-3 border rounded-lg flex items-center justify-between gap-4">
              <Label className="cursor-pointer flex-1">{vaccine}</Label>
              <FormField
                control={form.control}
                name={`vaccines.${vaccine}`}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type="date" {...field} className="w-40" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}
