"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { AlertCircle, CheckCircle, ChevronDown } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

type FormData = {
  [key: string]: any
}

export default function NewPatientFormPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState<FormData>({})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement
      setFormData((prev) => ({
        ...prev,
        [name]: checkbox.checked,
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }))
  }

  const handleMultiCheckboxChange = (groupName: string, value: string, checked: boolean) => {
    setFormData((prev) => {
      const group = prev[groupName] || []
      if (checked) {
        return {
          ...prev,
          [groupName]: [...group, value],
        }
      } else {
        return {
          ...prev,
          [groupName]: group.filter((item: string) => item !== value),
        }
      }
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // In production, integrate with HIPAA-compliant service like FormDr, IntakeQ, etc.
      // For now, just logging form data
      console.log("New Patient Form Submission:", formData)

      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setSubmitStatus('success')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-white to-accent/5 pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/95 via-primary/90 to-accent/20 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -mr-40 -mt-40"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -ml-40 -mb-40"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">New Patient Paperwork</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow">
              Please complete this form before your first appointment to save time.
            </p>
          </div>

          {/* HIPAA Notice */}
          <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6 flex gap-4 shadow-lg">
            <AlertCircle className="w-7 h-7 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-red-900 text-base">
                Important Notice
              </p>
              <p className="text-red-800 text-sm mt-2 leading-relaxed">
                This form contains protected health information and will be submitted securely to our HIPAA-compliant intake system. Your privacy and security are our top priority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 md:py-20 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* DEMOGRAPHICS SECTION */}
            <Accordion type="single" collapsible defaultValue="demographics" className="border border-primary/20 rounded-lg">
              <AccordionItem value="demographics" className="border-0">
                <AccordionTrigger className="px-6 py-4 hover:bg-primary/5 rounded-lg">
                  <span className="font-semibold text-lg text-primary-foreground">Demographics</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-6 space-y-6 border-t border-primary/20">
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-sm font-semibold">First Name <span className="text-red-500">*</span></Label>
                      <Input id="firstName" name="firstName" placeholder="First Name" onChange={handleInputChange} required />
                    </div>
                    <div>
                      <Label htmlFor="middleName" className="text-sm font-semibold">Middle Name</Label>
                      <Input id="middleName" name="middleName" placeholder="Middle Name" onChange={handleInputChange} />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-sm font-semibold">Last Name <span className="text-red-500">*</span></Label>
                      <Input id="lastName" name="lastName" placeholder="Last Name" onChange={handleInputChange} required />
                    </div>
                  </div>

                  {/* DOB and SSN */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="dob" className="text-sm font-semibold">Date of Birth <span className="text-red-500">*</span></Label>
                      <Input id="dob" name="dob" type="date" onChange={handleInputChange} required />
                    </div>
                    <div>
                      <Label htmlFor="ssn" className="text-sm font-semibold">Social Security Number</Label>
                      <Input id="ssn" name="ssn" placeholder="XXX-XX-XXXX" onChange={handleInputChange} />
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <Label htmlFor="address" className="text-sm font-semibold">Address <span className="text-red-500">*</span></Label>
                    <Input id="address" name="address" placeholder="Street Address" onChange={handleInputChange} required />
                  </div>

                  {/* City, State, Zip */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city" className="text-sm font-semibold">City <span className="text-red-500">*</span></Label>
                      <Input id="city" name="city" placeholder="City" onChange={handleInputChange} required />
                    </div>
                    <div>
                      <Label htmlFor="state" className="text-sm font-semibold">State <span className="text-red-500">*</span></Label>
                      <Input id="state" name="state" placeholder="TX" onChange={handleInputChange} required />
                    </div>
                    <div>
                      <Label htmlFor="zip" className="text-sm font-semibold">Zip Code <span className="text-red-500">*</span></Label>
                      <Input id="zip" name="zip" placeholder="76063" onChange={handleInputChange} required />
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div>
                    <Label htmlFor="email" className="text-sm font-semibold">Email <span className="text-red-500">*</span></Label>
                    <Input id="email" name="email" type="email" placeholder="email@example.com" onChange={handleInputChange} required />
                  </div>

                  {/* Phone Numbers */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="cellPhone" className="text-sm font-semibold">Cell Phone <span className="text-red-500">*</span></Label>
                      <Input id="cellPhone" name="cellPhone" type="tel" placeholder="(XXX) XXX-XXXX" onChange={handleInputChange} required />
                    </div>
                    <div>
                      <Label htmlFor="homePhone" className="text-sm font-semibold">Home Phone</Label>
                      <Input id="homePhone" name="homePhone" type="tel" placeholder="(XXX) XXX-XXXX" onChange={handleInputChange} />
                    </div>
                    <div>
                      <Label htmlFor="workPhone" className="text-sm font-semibold">Work Phone</Label>
                      <Input id="workPhone" name="workPhone" type="tel" placeholder="(XXX) XXX-XXXX" onChange={handleInputChange} />
                    </div>
                  </div>

                  {/* Sex */}
                  <div>
                    <Label className="text-sm font-semibold block mb-3">Sex <span className="text-red-500">*</span></Label>
                    <div className="flex gap-6">
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          id="sexMale"
                          name="sex"
                          value="male"
                          onChange={handleInputChange}
                          required
                          className="w-4 h-4"
                        />
                        <Label htmlFor="sexMale" className="cursor-pointer">Male</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          id="sexFemale"
                          name="sex"
                          value="female"
                          onChange={handleInputChange}
                          required
                          className="w-4 h-4"
                        />
                        <Label htmlFor="sexFemale" className="cursor-pointer">Female</Label>
                      </div>
                    </div>
                  </div>

                  {/* Employment Status */}
                  <div>
                    <Label className="text-sm font-semibold block mb-3">Employment Status</Label>
                    <div className="space-y-2">
                      {[
                        { id: 'empFullTime', label: 'Full Time', value: 'fullTime' },
                        { id: 'empPartTime', label: 'Part Time', value: 'partTime' },
                        { id: 'empRetired', label: 'Retired', value: 'retired' },
                        { id: 'empDisabled', label: 'Disabled', value: 'disabled' },
                      ].map((option) => (
                        <div key={option.id} className="flex items-center gap-2">
                          <Checkbox
                            id={option.id}
                            checked={formData.employmentStatus?.includes(option.value) || false}
                            onCheckedChange={(checked) =>
                              handleMultiCheckboxChange('employmentStatus', option.value, checked as boolean)
                            }
                          />
                          <Label htmlFor={option.id} className="cursor-pointer">{option.label}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Marital Status */}
                  <div>
                    <Label className="text-sm font-semibold block mb-3">Marital Status</Label>
                    <div className="flex flex-wrap gap-4">
                      {[
                        { id: 'maritalSingle', label: 'Single', value: 'single' },
                        { id: 'maritalMarried', label: 'Married', value: 'married' },
                        { id: 'maritalDivorced', label: 'Divorced', value: 'divorced' },
                        { id: 'maritalWidowed', label: 'Widowed', value: 'widowed' },
                      ].map((option) => (
                        <div key={option.id} className="flex items-center gap-2">
                          <input
                            type="radio"
                            id={option.id}
                            name="maritalStatus"
                            value={option.value}
                            onChange={handleInputChange}
                            className="w-4 h-4"
                          />
                          <Label htmlFor={option.id} className="cursor-pointer">{option.label}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* How did you hear about us */}
                  <div>
                    <Label htmlFor="howHeard" className="text-sm font-semibold">How did you hear about us?</Label>
                    <Input id="howHeard" name="howHeard" placeholder="Reference source" onChange={handleInputChange} />
                  </div>

                  {/* Emergency Contact */}
                  <div className="bg-primary/5 p-4 rounded-lg border border-primary/20 space-y-4">
                    <h4 className="font-semibold text-primary-foreground">Emergency Contact</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="emergencyName" className="text-sm font-semibold">Name</Label>
                        <Input id="emergencyName" name="emergencyName" placeholder="Contact Name" onChange={handleInputChange} />
                      </div>
                      <div>
                        <Label htmlFor="emergencyRelationship" className="text-sm font-semibold">Relationship</Label>
                        <Input id="emergencyRelationship" name="emergencyRelationship" placeholder="Relationship" onChange={handleInputChange} />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="emergencyPhone" className="text-sm font-semibold">Phone</Label>
                      <Input id="emergencyPhone" name="emergencyPhone" type="tel" placeholder="(XXX) XXX-XXXX" onChange={handleInputChange} />
                    </div>
                  </div>

                  {/* Pharmacy Information */}
                  <div className="bg-primary/5 p-4 rounded-lg border border-primary/20 space-y-4">
                    <h4 className="font-semibold text-primary-foreground">Pharmacy Information</h4>
                    <div>
                      <Label htmlFor="pharmacyName" className="text-sm font-semibold">Pharmacy Name</Label>
                      <Input id="pharmacyName" name="pharmacyName" placeholder="Pharmacy Name" onChange={handleInputChange} />
                    </div>
                    <div>
                      <Label htmlFor="pharmacyAddress" className="text-sm font-semibold">Address or Intersection</Label>
                      <Input id="pharmacyAddress" name="pharmacyAddress" placeholder="Address" onChange={handleInputChange} />
                    </div>
                  </div>

                  {/* Ethnicity */}
                  <div>
                    <Label className="text-sm font-semibold block mb-3">Ethnicity</Label>
                    <div className="space-y-2">
                      {[
                        { id: 'ethAsian', label: 'Asian', value: 'asian' },
                        { id: 'ethBlack', label: 'Black or African American', value: 'black' },
                        { id: 'ethCaucasian', label: 'Caucasian', value: 'caucasian' },
                        { id: 'ethHispanic', label: 'Hispanic', value: 'hispanic' },
                        { id: 'ethOther', label: 'Other', value: 'other' },
                      ].map((option) => (
                        <div key={option.id} className="flex items-center gap-2">
                          <Checkbox
                            id={option.id}
                            checked={formData.ethnicity?.includes(option.value) || false}
                            onCheckedChange={(checked) =>
                              handleMultiCheckboxChange('ethnicity', option.value, checked as boolean)
                            }
                          />
                          <Label htmlFor={option.id} className="cursor-pointer">{option.label}</Label>
                        </div>
                      ))}
                    </div>
                    {formData.ethnicity?.includes('other') && (
                      <Input
                        name="ethnicityOther"
                        placeholder="Please specify"
                        onChange={handleInputChange}
                        className="mt-3"
                      />
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* INSURANCE SECTION */}
            <Accordion type="single" collapsible className="border border-primary/20 rounded-lg">
              <AccordionItem value="insurance" className="border-0">
                <AccordionTrigger className="px-6 py-4 hover:bg-primary/5 rounded-lg">
                  <span className="font-semibold text-lg text-primary-foreground">Insurance Information</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-6 space-y-6 border-t border-primary/20">
                  {/* Primary Insurance */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-primary-foreground">Primary Insurance</h4>
                    <div>
                      <Label htmlFor="primaryInsurance" className="text-sm font-semibold">Insurance Company</Label>
                      <Input id="primaryInsurance" name="primaryInsurance" placeholder="Insurance Company Name" onChange={handleInputChange} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="primaryMemberId" className="text-sm font-semibold">Member ID#</Label>
                        <Input id="primaryMemberId" name="primaryMemberId" placeholder="Member ID" onChange={handleInputChange} />
                      </div>
                      <div>
                        <Label htmlFor="primaryGroupId" className="text-sm font-semibold">Group#</Label>
                        <Input id="primaryGroupId" name="primaryGroupId" placeholder="Group Number" onChange={handleInputChange} />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="primaryPolicyHolder" className="text-sm font-semibold">Policy Holder Name</Label>
                        <Input id="primaryPolicyHolder" name="primaryPolicyHolder" placeholder="Full Name" onChange={handleInputChange} />
                      </div>
                      <div>
                        <Label htmlFor="primaryPolicyHolderDob" className="text-sm font-semibold">Policy Holder DOB</Label>
                        <Input id="primaryPolicyHolderDob" name="primaryPolicyHolderDob" type="date" onChange={handleInputChange} />
                      </div>
                    </div>
                  </div>

                  {/* Secondary Insurance */}
                  <div className="space-y-4 pt-4 border-t border-primary/20">
                    <h4 className="font-semibold text-primary-foreground">Secondary Insurance</h4>
                    <div>
                      <Label htmlFor="secondaryInsurance" className="text-sm font-semibold">Insurance Company</Label>
                      <Input id="secondaryInsurance" name="secondaryInsurance" placeholder="Insurance Company Name" onChange={handleInputChange} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="secondaryMemberId" className="text-sm font-semibold">Member ID#</Label>
                        <Input id="secondaryMemberId" name="secondaryMemberId" placeholder="Member ID" onChange={handleInputChange} />
                      </div>
                      <div>
                        <Label htmlFor="secondaryGroupId" className="text-sm font-semibold">Group#</Label>
                        <Input id="secondaryGroupId" name="secondaryGroupId" placeholder="Group Number" onChange={handleInputChange} />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="secondaryPolicyHolder" className="text-sm font-semibold">Policy Holder Name</Label>
                        <Input id="secondaryPolicyHolder" name="secondaryPolicyHolder" placeholder="Full Name" onChange={handleInputChange} />
                      </div>
                      <div>
                        <Label htmlFor="secondaryPolicyHolderDob" className="text-sm font-semibold">Policy Holder DOB</Label>
                        <Input id="secondaryPolicyHolderDob" name="secondaryPolicyHolderDob" type="date" onChange={handleInputChange} />
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* MEDICAL HISTORY SECTION */}
            <Accordion type="single" collapsible className="border border-primary/20 rounded-lg">
              <AccordionItem value="medical-history" className="border-0">
                <AccordionTrigger className="px-6 py-4 hover:bg-primary/5 rounded-lg">
                  <span className="font-semibold text-lg text-primary-foreground">Medical History</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-6 space-y-6 border-t border-primary/20">
                  <div className="flex items-center gap-2 mb-4">
                    <Checkbox
                      id="noMedicalHistory"
                      checked={formData.noMedicalHistory || false}
                      onCheckedChange={(checked) => handleCheckboxChange('noMedicalHistory', checked as boolean)}
                    />
                    <Label htmlFor="noMedicalHistory" className="cursor-pointer font-semibold">
                      I HAVE NO PAST MEDICAL HISTORY
                    </Label>
                  </div>

                  {!formData.noMedicalHistory && (
                    <div className="space-y-6">
                      <MedicalHistorySection
                        title="EYES/EAR/NOSE/THROAT"
                        conditions={[
                          'Cataracts',
                          'Glaucoma',
                          'Macular Degeneration',
                          'Hearing loss',
                          'Cold sores (canker sores)',
                        ]}
                        formData={formData}
                        handleMultiCheckboxChange={handleMultiCheckboxChange}
                      />

                      <MedicalHistorySection
                        title="MUSCULOSKELETAL/RHEUM"
                        conditions={['Arthritis', 'Gout']}
                        formData={formData}
                        handleMultiCheckboxChange={handleMultiCheckboxChange}
                      />

                      <MedicalHistorySection
                        title="BLOOD/LYMPHATIC/CANCER"
                        conditions={[
                          'Anemia/Low blood counts',
                          'Blood clots',
                          'Cancer (please specify type)',
                          'Easy bleeding',
                          'Sickle cell anemia',
                          'Transfusion',
                        ]}
                        formData={formData}
                        handleMultiCheckboxChange={handleMultiCheckboxChange}
                        hasSubfield={['Cancer (please specify type)']}
                      />

                      <MedicalHistorySection
                        title="SKIN"
                        conditions={['Eczema/Dry skin', 'Psoriasis']}
                        formData={formData}
                        handleMultiCheckboxChange={handleMultiCheckboxChange}
                      />

                      <MedicalHistorySection
                        title="CARDIOVASCULAR"
                        conditions={[
                          'Heart attack/Heart disease',
                          'Heart murmur',
                          'High blood pressure',
                          'Pacemaker',
                          'PAD (Peripheral artery disease)',
                        ]}
                        formData={formData}
                        handleMultiCheckboxChange={handleMultiCheckboxChange}
                      />

                      <MedicalHistorySection
                        title="ALLERGIC/IMMUNOLOGIC"
                        conditions={['Hay fever/Pollen allergy']}
                        formData={formData}
                        handleMultiCheckboxChange={handleMultiCheckboxChange}
                      />

                      <MedicalHistorySection
                        title="NEUROLOGIC"
                        conditions={['Headaches', 'Seizures/Fits/Epilepsy', 'Stroke']}
                        formData={formData}
                        handleMultiCheckboxChange={handleMultiCheckboxChange}
                      />

                      <MedicalHistorySection
                        title="INFECTIONS"
                        conditions={[
                          'AIDS/HIV',
                          'Genital infections (herpes, chlamydia, gonorrhea, warts)',
                          'Hepatitis (A/B/C)',
                          'Measles/Mumps/Rubella',
                          'Rheumatic fever',
                          'Shingles',
                          'Tuberculosis (TB)',
                        ]}
                        formData={formData}
                        handleMultiCheckboxChange={handleMultiCheckboxChange}
                      />

                      <MedicalHistorySection
                        title="PSYCHIATRIC/DEPENDENCY"
                        conditions={[
                          'ADD/ADHD',
                          'Alcohol/Drug Dependency',
                          'Anxiety',
                          'Bipolar Disorder',
                          'Depression',
                          'Eating disorder (anorexia/bulimia)',
                          'Suicide attempt',
                        ]}
                        formData={formData}
                        handleMultiCheckboxChange={handleMultiCheckboxChange}
                      />

                      <MedicalHistorySection
                        title="PULMONARY"
                        conditions={['Asthma', 'COPD/Emphysema', 'Pneumonia']}
                        formData={formData}
                        handleMultiCheckboxChange={handleMultiCheckboxChange}
                      />

                      <MedicalHistorySection
                        title="GASTROINTESTINAL"
                        conditions={[
                          'Colon polyps',
                          'Hemorrhoids',
                          'Diverticulosis',
                          'Liver disease',
                          'Reflux (GERD)',
                          'Ulcers (stomach, duodenal)',
                          'High cholesterol',
                        ]}
                        formData={formData}
                        handleMultiCheckboxChange={handleMultiCheckboxChange}
                      />

                      <MedicalHistorySection
                        title="ENDOCRINE"
                        conditions={[
                          'Diabetes (sugar)',
                          'Hyperthyroid (high thyroid)',
                          'Hypothyroid (low thyroid)',
                        ]}
                        formData={formData}
                        handleMultiCheckboxChange={handleMultiCheckboxChange}
                      />

                      <MedicalHistorySection
                        title="GENITOURINARY"
                        conditions={[
                          'Kidney/bladder infections',
                          'Infertility (pregnancy problems)',
                          'Osteoporosis/Osteopenia',
                        ]}
                        formData={formData}
                        handleMultiCheckboxChange={handleMultiCheckboxChange}
                      />

                      <MedicalHistorySection
                        title="MEN ONLY"
                        conditions={[
                          'Enlarged prostate (BPH)',
                          'Erectile dysfunction/impotence',
                          'Prostatitis',
                        ]}
                        formData={formData}
                        handleMultiCheckboxChange={handleMultiCheckboxChange}
                      />

                      <MedicalHistorySection
                        title="WOMEN ONLY"
                        conditions={[
                          'Menopausal symptoms',
                          'Abnormal uterine bleeding',
                          'Endometriosis',
                          'Premenstrual Syndrome (PMS)',
                        ]}
                        formData={formData}
                        handleMultiCheckboxChange={handleMultiCheckboxChange}
                      />

                      <div>
                        <Label htmlFor="otherMedicalHistory" className="text-sm font-semibold block mb-2">
                          Other Medical History
                        </Label>
                        <Textarea
                          id="otherMedicalHistory"
                          name="otherMedicalHistory"
                          placeholder="Please describe any other medical conditions..."
                          onChange={handleInputChange}
                          rows={4}
                          className="resize-none"
                        />
                      </div>
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* MEDICATIONS SECTION */}
            <Accordion type="single" collapsible className="border border-primary/20 rounded-lg">
              <AccordionItem value="medications" className="border-0">
                <AccordionTrigger className="px-6 py-4 hover:bg-primary/5 rounded-lg">
                  <span className="font-semibold text-lg text-primary-foreground">Medications & Allergies</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-6 space-y-6 border-t border-primary/20">
                  <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                    <p className="text-sm text-blue-900">
                      Please bring your medications in their original bottles or provide a complete medication list. If you take more than 10 medications, please attach a list.
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="medProblems"
                      checked={formData.medicationProblems || false}
                      onCheckedChange={(checked) => handleCheckboxChange('medicationProblems', checked as boolean)}
                    />
                    <Label htmlFor="medProblems" className="cursor-pointer">
                      Do you have problems remembering to take your medications?
                    </Label>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-primary-foreground">Current Medications (List up to 10)</h4>
                    {[0, 1, 2, 3, 4].map((index) => (
                      <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4 border border-primary/20 rounded-lg">
                        <div>
                          <Label className="text-xs font-semibold">Medication Name</Label>
                          <Input
                            name={`medication${index}Name`}
                            placeholder="Medication Name"
                            onChange={handleInputChange}
                          />
                        </div>
                        <div>
                          <Label className="text-xs font-semibold">Dosage</Label>
                          <Input
                            name={`medication${index}Dosage`}
                            placeholder="e.g., 10mg"
                            onChange={handleInputChange}
                          />
                        </div>
                        <div>
                          <Label className="text-xs font-semibold">Times Per Day</Label>
                          <Input
                            name={`medication${index}Frequency`}
                            type="number"
                            placeholder="1, 2, 3..."
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Medication Allergies */}
                  <div className="space-y-4 pt-4 border-t border-primary/20">
                    <h4 className="font-semibold text-primary-foreground">Medication Allergies</h4>
                    <div className="flex items-center gap-2">
                      <Checkbox
                        id="noAllergies"
                        checked={formData.noAllergies || false}
                        onCheckedChange={(checked) => handleCheckboxChange('noAllergies', checked as boolean)}
                      />
                      <Label htmlFor="noAllergies" className="cursor-pointer font-semibold">
                        NO KNOWN ALLERGIES (NKA)
                      </Label>
                    </div>

                    {!formData.noAllergies && (
                      <div className="space-y-4">
                        {[0, 1, 2].map((index) => (
                          <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4 border border-primary/20 rounded-lg">
                            <div>
                              <Label className="text-xs font-semibold">Medication Name</Label>
                              <Input
                                name={`allergen${index}Medication`}
                                placeholder="Medication Name"
                                onChange={handleInputChange}
                              />
                            </div>
                            <div>
                              <Label className="text-xs font-semibold">Reaction</Label>
                              <Input
                                name={`allergen${index}Reaction`}
                                placeholder="e.g., Rash, Hives"
                                onChange={handleInputChange}
                              />
                            </div>
                            <div>
                              <Label className="text-xs font-semibold">Age When Occurred</Label>
                              <Input
                                name={`allergen${index}Age`}
                                type="number"
                                placeholder="Age"
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Hospitalizations */}
                  <div className="space-y-4 pt-4 border-t border-primary/20">
                    <h4 className="font-semibold text-primary-foreground">Hospitalizations</h4>
                    <p className="text-sm text-muted-foreground">Have you had any significant hospitalizations?</p>
                    {[0, 1, 2].map((index) => (
                      <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-3 p-4 border border-primary/20 rounded-lg">
                        <div>
                          <Label className="text-xs font-semibold">Reason for Hospitalization</Label>
                          <Input
                            name={`hospitalization${index}Reason`}
                            placeholder="Reason"
                            onChange={handleInputChange}
                          />
                        </div>
                        <div>
                          <Label className="text-xs font-semibold">Year</Label>
                          <Input
                            name={`hospitalization${index}Year`}
                            type="number"
                            placeholder="YYYY"
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* SURGICAL HISTORY SECTION */}
            <Accordion type="single" collapsible className="border border-primary/20 rounded-lg">
              <AccordionItem value="surgical" className="border-0">
                <AccordionTrigger className="px-6 py-4 hover:bg-primary/5 rounded-lg">
                  <span className="font-semibold text-lg text-primary-foreground">Surgical History</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-6 space-y-4 border-t border-primary/20">
                  <p className="text-sm text-muted-foreground">Check procedures you have had and provide the date if known</p>
                  {[
                    'Angioplasty/Stent',
                    'CABG (Heart bypass)',
                    'Defibrillator',
                    'Appendectomy',
                    'Knee Replacement',
                    'Hip Replacement',
                    'Back Surgery',
                    'Carpal tunnel release',
                    'Cataract extraction',
                    'Fracture',
                    'Gallbladder Removal',
                    'Gastric bypass',
                    'Heart Valve',
                    'Hernia repair',
                    'Hysterectomy',
                    'Mastectomy',
                    'Thyroidectomy',
                    'Tonsillectomy',
                    'Pacemaker',
                    'Prostate surgery',
                    'Biopsy',
                    'Other',
                  ].map((surgery, index) => (
                    <div key={index} className="flex items-center justify-between gap-4 p-3 border border-primary/20 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Checkbox
                          id={`surgery${index}`}
                          checked={formData[`surgery${index}`] || false}
                          onCheckedChange={(checked) => handleCheckboxChange(`surgery${index}`, checked as boolean)}
                        />
                        <Label htmlFor={`surgery${index}`} className="cursor-pointer text-sm">
                          {surgery}
                        </Label>
                      </div>
                      {formData[`surgery${index}`] && (
                        <Input
                          name={`surgery${index}Date`}
                          type="date"
                          onChange={handleInputChange}
                          className="w-40"
                        />
                      )}
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* SOCIAL HISTORY SECTION */}
            <Accordion type="single" collapsible className="border border-primary/20 rounded-lg">
              <AccordionItem value="social" className="border-0">
                <AccordionTrigger className="px-6 py-4 hover:bg-primary/5 rounded-lg">
                  <span className="font-semibold text-lg text-primary-foreground">Social History</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-6 space-y-6 border-t border-primary/20">
                  {/* Falls */}
                  <div className="space-y-3">
                    <Label className="text-sm font-semibold">Have you experienced a fall in the past 12 months?</Label>
                    <div className="flex gap-6">
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          id="fallYes"
                          name="falls"
                          value="yes"
                          onChange={handleInputChange}
                          className="w-4 h-4"
                        />
                        <Label htmlFor="fallYes" className="cursor-pointer">Yes</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          id="fallNo"
                          name="falls"
                          value="no"
                          onChange={handleInputChange}
                          className="w-4 h-4"
                        />
                        <Label htmlFor="fallNo" className="cursor-pointer">No</Label>
                      </div>
                    </div>
                    {formData.falls === 'yes' && (
                      <Input
                        name="fallsCount"
                        type="number"
                        placeholder="Number of falls"
                        onChange={handleInputChange}
                        className="max-w-xs"
                      />
                    )}
                  </div>

                  {/* Living Will */}
                  <div className="space-y-3 pt-4 border-t border-primary/20">
                    <Label className="text-sm font-semibold">Do you have a Living Will/Durable Power of Attorney?</Label>
                    <div className="flex gap-6">
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          id="willYes"
                          name="livingWill"
                          value="yes"
                          onChange={handleInputChange}
                          className="w-4 h-4"
                        />
                        <Label htmlFor="willYes" className="cursor-pointer">Yes</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          id="willNo"
                          name="livingWill"
                          value="no"
                          onChange={handleInputChange}
                          className="w-4 h-4"
                        />
                        <Label htmlFor="willNo" className="cursor-pointer">No</Label>
                      </div>
                    </div>
                    {formData.livingWill === 'no' && (
                      <div className="bg-primary/5 p-3 rounded-lg border border-primary/20">
                        <div className="flex items-center gap-2">
                          <Checkbox
                            id="interestedWill"
                            checked={formData.interestedWill || false}
                            onCheckedChange={(checked) => handleCheckboxChange('interestedWill', checked as boolean)}
                          />
                          <Label htmlFor="interestedWill" className="cursor-pointer text-sm">
                            I am interested in completing one
                          </Label>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Living Arrangements */}
                  <div className="space-y-3 pt-4 border-t border-primary/20">
                    <Label className="text-sm font-semibold">Living Arrangements (check all that apply)</Label>
                    <div className="space-y-2">
                      {[
                        { id: 'livingSpouse', label: 'I live with my spouse/partner', value: 'spouse' },
                        { id: 'livingAlone', label: 'I live alone', value: 'alone' },
                        { id: 'livingAloneSupport', label: 'I live alone but have friends who check on me regularly', value: 'aloneSupport' },
                        { id: 'livingFamily', label: 'I have family close by who can help me', value: 'family' },
                        { id: 'livingAssisted', label: 'Assisted Living/Group Home', value: 'assisted' },
                        { id: 'livingNursing', label: 'Nursing Home', value: 'nursing' },
                      ].map((option) => (
                        <div key={option.id} className="flex items-center gap-2">
                          <Checkbox
                            id={option.id}
                            checked={formData.livingArrangements?.includes(option.value) || false}
                            onCheckedChange={(checked) =>
                              handleMultiCheckboxChange('livingArrangements', option.value, checked as boolean)
                            }
                          />
                          <Label htmlFor={option.id} className="cursor-pointer">{option.label}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sexual Activity */}
                  <div className="space-y-3 pt-4 border-t border-primary/20">
                    <Label className="text-sm font-semibold">Are you sexually active?</Label>
                    <div className="flex gap-6">
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          id="sexActive"
                          name="sexuallyActive"
                          value="yes"
                          onChange={handleInputChange}
                          className="w-4 h-4"
                        />
                        <Label htmlFor="sexActive" className="cursor-pointer">Yes</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          id="sexInactive"
                          name="sexuallyActive"
                          value="no"
                          onChange={handleInputChange}
                          className="w-4 h-4"
                        />
                        <Label htmlFor="sexInactive" className="cursor-pointer">No</Label>
                      </div>
                    </div>

                    {formData.sexuallyActive === 'yes' && (
                      <div className="space-y-4 pt-4 bg-primary/5 p-4 rounded-lg border border-primary/20">
                        <div>
                          <Label className="text-sm font-semibold block mb-2">Type of Partners</Label>
                          <div className="space-y-2">
                            {[
                              { id: 'partnerMen', label: 'Men only', value: 'men' },
                              { id: 'partnerWomen', label: 'Women only', value: 'women' },
                              { id: 'partnerBoth', label: 'Both men and women', value: 'both' },
                            ].map((option) => (
                              <div key={option.id} className="flex items-center gap-2">
                                <input
                                  type="radio"
                                  id={option.id}
                                  name="partnerType"
                                  value={option.value}
                                  onChange={handleInputChange}
                                  className="w-4 h-4"
                                />
                                <Label htmlFor={option.id} className="cursor-pointer text-sm">{option.label}</Label>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <Label className="text-sm font-semibold block mb-2">Number of partners in the last 12 months</Label>
                          <div className="space-y-2">
                            {[
                              { id: 'partner1', label: '1', value: '1' },
                              { id: 'partner2', label: '2', value: '2' },
                              { id: 'partner3', label: '3', value: '3' },
                              { id: 'partnerMore', label: 'More than 3', value: 'more' },
                            ].map((option) => (
                              <div key={option.id} className="flex items-center gap-2">
                                <input
                                  type="radio"
                                  id={option.id}
                                  name="numberOfPartners"
                                  value={option.value}
                                  onChange={handleInputChange}
                                  className="w-4 h-4"
                                />
                                <Label htmlFor={option.id} className="cursor-pointer text-sm">{option.label}</Label>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <Label className="text-sm font-semibold block mb-2">Do you always use protection?</Label>
                          <div className="flex gap-6">
                            <div className="flex items-center gap-2">
                              <input
                                type="radio"
                                id="protectionYes"
                                name="usesProtection"
                                value="yes"
                                onChange={handleInputChange}
                                className="w-4 h-4"
                              />
                              <Label htmlFor="protectionYes" className="cursor-pointer text-sm">Yes</Label>
                            </div>
                            <div className="flex items-center gap-2">
                              <input
                                type="radio"
                                id="protectionNo"
                                name="usesProtection"
                                value="no"
                                onChange={handleInputChange}
                                className="w-4 h-4"
                              />
                              <Label htmlFor="protectionNo" className="cursor-pointer text-sm">No</Label>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Women Only Section */}
                  <div className="space-y-4 pt-4 border-t border-primary/20 bg-accent/5 p-4 rounded-lg border border-accent/20">
                    <p className="font-semibold text-primary-foreground text-sm">Women Only</p>

                    <div className="space-y-2">
                      <Label className="text-sm font-semibold">Have you ever had an abnormal pap smear?</Label>
                      <div className="flex gap-6">
                        <div className="flex items-center gap-2">
                          <input
                            type="radio"
                            id="papYes"
                            name="abnormalPap"
                            value="yes"
                            onChange={handleInputChange}
                            className="w-4 h-4"
                          />
                          <Label htmlFor="papYes" className="cursor-pointer text-sm">Yes</Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <input
                            type="radio"
                            id="papNo"
                            name="abnormalPap"
                            value="no"
                            onChange={handleInputChange}
                            className="w-4 h-4"
                          />
                          <Label htmlFor="papNo" className="cursor-pointer text-sm">No</Label>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm font-semibold">Have you ever had an abnormal mammogram?</Label>
                      <div className="flex gap-6">
                        <div className="flex items-center gap-2">
                          <input
                            type="radio"
                            id="mammoYes"
                            name="abnormalMammogram"
                            value="yes"
                            onChange={handleInputChange}
                            className="w-4 h-4"
                          />
                          <Label htmlFor="mammoYes" className="cursor-pointer text-sm">Yes</Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <input
                            type="radio"
                            id="mammoNo"
                            name="abnormalMammogram"
                            value="no"
                            onChange={handleInputChange}
                            className="w-4 h-4"
                          />
                          <Label htmlFor="mammoNo" className="cursor-pointer text-sm">No</Label>
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="lastMenses" className="text-sm font-semibold block mb-2">
                        When was your last menstrual period?
                      </Label>
                      <Input
                        id="lastMenses"
                        name="lastMenstrualPeriod"
                        type="date"
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm font-semibold">Do you use contraception?</Label>
                      <div className="flex gap-6">
                        <div className="flex items-center gap-2">
                          <input
                            type="radio"
                            id="contraYes"
                            name="usesContraception"
                            value="yes"
                            onChange={handleInputChange}
                            className="w-4 h-4"
                          />
                          <Label htmlFor="contraYes" className="cursor-pointer text-sm">Yes</Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <input
                            type="radio"
                            id="contraNo"
                            name="usesContraception"
                            value="no"
                            onChange={handleInputChange}
                            className="w-4 h-4"
                          />
                          <Label htmlFor="contraNo" className="cursor-pointer text-sm">No</Label>
                        </div>
                      </div>
                      {formData.usesContraception === 'yes' && (
                        <Input
                          name="contraceptionType"
                          placeholder="Type of contraception"
                          onChange={handleInputChange}
                          className="mt-2"
                        />
                      )}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* SCREENING SECTION */}
            <Accordion type="single" collapsible className="border border-primary/20 rounded-lg">
              <AccordionItem value="screening" className="border-0">
                <AccordionTrigger className="px-6 py-4 hover:bg-primary/5 rounded-lg">
                  <span className="font-semibold text-lg text-primary-foreground">Screening & Health History</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-6 space-y-6 border-t border-primary/20">
                  {/* Depression Screening */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-primary-foreground">Depression Screening (PHQ-2)</h4>
                    <p className="text-sm text-muted-foreground">Over the last 2 weeks, how often have you been bothered by:</p>

                    <div className="space-y-4">
                      <div>
                        <Label className="text-sm font-semibold block mb-3">
                          Little interest or pleasure in doing things
                        </Label>
                        <div className="space-y-2">
                          {[
                            { id: 'interest0', label: 'Not at all', value: 'notAtAll' },
                            { id: 'interest1', label: 'Several days', value: 'severalDays' },
                            { id: 'interest2', label: 'More than half the days', value: 'halfDays' },
                            { id: 'interest3', label: 'Nearly every day', value: 'everDay' },
                          ].map((option) => (
                            <div key={option.id} className="flex items-center gap-2">
                              <input
                                type="radio"
                                id={option.id}
                                name="littleInterest"
                                value={option.value}
                                onChange={handleInputChange}
                                className="w-4 h-4"
                              />
                              <Label htmlFor={option.id} className="cursor-pointer text-sm">{option.label}</Label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <Label className="text-sm font-semibold block mb-3">
                          Feeling down, depressed, or hopeless
                        </Label>
                        <div className="space-y-2">
                          {[
                            { id: 'mood0', label: 'Not at all', value: 'notAtAll' },
                            { id: 'mood1', label: 'Several days', value: 'severalDays' },
                            { id: 'mood2', label: 'More than half the days', value: 'halfDays' },
                            { id: 'mood3', label: 'Nearly every day', value: 'everDay' },
                          ].map((option) => (
                            <div key={option.id} className="flex items-center gap-2">
                              <input
                                type="radio"
                                id={option.id}
                                name="depressedMood"
                                value={option.value}
                                onChange={handleInputChange}
                                className="w-4 h-4"
                              />
                              <Label htmlFor={option.id} className="cursor-pointer text-sm">{option.label}</Label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Alcohol and Drug History */}
                  <div className="space-y-4 pt-4 border-t border-primary/20">
                    <h4 className="font-semibold text-primary-foreground">Alcohol and Drug History (AUDIT-C)</h4>

                    <div>
                      <Label className="text-sm font-semibold block mb-3">
                        How often do you have a drink containing alcohol?
                      </Label>
                      <div className="space-y-2">
                        {[
                          { id: 'alcohol0', label: 'Never', value: 'never' },
                          { id: 'alcohol1', label: 'Monthly or less', value: 'monthlyOrLess' },
                          { id: 'alcohol2', label: '2-4 times a month', value: '2-4PerMonth' },
                          { id: 'alcohol3', label: '2-3 times a week', value: '2-3PerWeek' },
                          { id: 'alcohol4', label: '4 or more times a week', value: '4Plus' },
                        ].map((option) => (
                          <div key={option.id} className="flex items-center gap-2">
                            <input
                              type="radio"
                              id={option.id}
                              name="alcoholFrequency"
                              value={option.value}
                              onChange={handleInputChange}
                              className="w-4 h-4"
                            />
                            <Label htmlFor={option.id} className="cursor-pointer text-sm">{option.label}</Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4">
                      <Label className="text-sm font-semibold block mb-3">
                        How many standard drinks do you have on a typical day when drinking?
                      </Label>
                      <div className="space-y-2">
                        {[
                          { id: 'drinks0', label: '1-2', value: '1-2' },
                          { id: 'drinks1', label: '3-4', value: '3-4' },
                          { id: 'drinks2', label: '5-6', value: '5-6' },
                          { id: 'drinks3', label: '7-9', value: '7-9' },
                          { id: 'drinks4', label: '10 or more', value: '10Plus' },
                        ].map((option) => (
                          <div key={option.id} className="flex items-center gap-2">
                            <input
                              type="radio"
                              id={option.id}
                              name="drinksPerDay"
                              value={option.value}
                              onChange={handleInputChange}
                              className="w-4 h-4"
                            />
                            <Label htmlFor={option.id} className="cursor-pointer text-sm">{option.label}</Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Smoking */}
                    <div className="pt-4 space-y-3">
                      <Label className="text-sm font-semibold block">Do you currently smoke?</Label>
                      <div className="flex gap-6">
                        <div className="flex items-center gap-2">
                          <input
                            type="radio"
                            id="smokeYes"
                            name="currentSmoker"
                            value="yes"
                            onChange={handleInputChange}
                            className="w-4 h-4"
                          />
                          <Label htmlFor="smokeYes" className="cursor-pointer text-sm">Yes</Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <input
                            type="radio"
                            id="smokeNo"
                            name="currentSmoker"
                            value="no"
                            onChange={handleInputChange}
                            className="w-4 h-4"
                          />
                          <Label htmlFor="smokeNo" className="cursor-pointer text-sm">No</Label>
                        </div>
                      </div>
                      {formData.currentSmoker === 'yes' && (
                        <div className="grid grid-cols-2 gap-4 p-3 bg-primary/5 rounded-lg">
                          <div>
                            <Input
                              name="cigarettsPerDay"
                              type="number"
                              placeholder="Cigarettes per day"
                              onChange={handleInputChange}
                            />
                          </div>
                          <div>
                            <Input
                              name="smokingYears"
                              type="number"
                              placeholder="Years smoking"
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Former Smoker */}
                    <div className="pt-3 space-y-3">
                      <Label className="text-sm font-semibold block">Are you a former smoker?</Label>
                      <div className="flex gap-6">
                        <div className="flex items-center gap-2">
                          <input
                            type="radio"
                            id="formerYes"
                            name="formerSmoker"
                            value="yes"
                            onChange={handleInputChange}
                            className="w-4 h-4"
                          />
                          <Label htmlFor="formerYes" className="cursor-pointer text-sm">Yes</Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <input
                            type="radio"
                            id="formerNo"
                            name="formerSmoker"
                            value="no"
                            onChange={handleInputChange}
                            className="w-4 h-4"
                          />
                          <Label htmlFor="formerNo" className="cursor-pointer text-sm">No</Label>
                        </div>
                      </div>
                    </div>

                    {/* Street Drugs */}
                    <div className="pt-3 space-y-3">
                      <Label className="text-sm font-semibold block">Have you ever used street drugs?</Label>
                      <div className="flex gap-6">
                        <div className="flex items-center gap-2">
                          <input
                            type="radio"
                            id="drugsYes"
                            name="usedStreetDrugs"
                            value="yes"
                            onChange={handleInputChange}
                            className="w-4 h-4"
                          />
                          <Label htmlFor="drugsYes" className="cursor-pointer text-sm">Yes</Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <input
                            type="radio"
                            id="drugsNo"
                            name="usedStreetDrugs"
                            value="no"
                            onChange={handleInputChange}
                            className="w-4 h-4"
                          />
                          <Label htmlFor="drugsNo" className="cursor-pointer text-sm">No</Label>
                        </div>
                      </div>
                      {formData.usedStreetDrugs === 'yes' && (
                        <Textarea
                          name="streetDrugsSpecify"
                          placeholder="What drugs?"
                          onChange={handleInputChange}
                          rows={3}
                          className="resize-none"
                        />
                      )}
                    </div>
                  </div>

                  {/* Preventive Tests */}
                  <div className="space-y-4 pt-4 border-t border-primary/20">
                    <h4 className="font-semibold text-primary-foreground">Preventive Tests</h4>
                    <p className="text-sm text-muted-foreground">Have you had any of the following tests? If yes, enter the date.</p>
                    <div className="space-y-2">
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
                      ].map((test, index) => (
                        <div key={index} className="flex items-center justify-between gap-4 p-3 border border-primary/20 rounded-lg">
                          <Label className="text-sm">{test}</Label>
                          <Input
                            name={`test${index}Date`}
                            type="date"
                            onChange={handleInputChange}
                            className="w-40"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Vaccinations */}
                  <div className="space-y-4 pt-4 border-t border-primary/20">
                    <h4 className="font-semibold text-primary-foreground">Vaccinations</h4>
                    <div className="space-y-2">
                      {[
                        'Tdap (Tetanus)',
                        'Pneumovax',
                        'Prevnar 13',
                        'Influenza (Flu Shot)',
                        'Zostavax (Shingles)',
                        'Hepatitis B Vaccine',
                        'Mammogram',
                        'Pap Smear',
                      ].map((vaccine, index) => (
                        <div key={index} className="flex items-center justify-between gap-4 p-3 border border-primary/20 rounded-lg">
                          <Label className="text-sm">{vaccine}</Label>
                          <Input
                            name={`vaccine${index}Date`}
                            type="date"
                            onChange={handleInputChange}
                            className="w-40"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-green-900">Form submitted successfully!</p>
                  <p className="text-sm text-green-800">We will contact you shortly to confirm your appointment.</p>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-red-900">Error submitting form</p>
                  <p className="text-sm text-red-800">Please try again or call us at (817) 453-7522</p>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="flex gap-4 pt-8 sticky bottom-0 bg-gradient-to-t from-white to-white/80 p-4 rounded-lg border border-primary/20">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90 py-3 font-semibold text-base"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Patient Form'}
              </Button>
            </div>

            {/* Note */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-sm text-red-900 font-semibold mb-1">
                Important Notice
              </p>
              <p className="text-red-800 text-sm">
                This form contains protected health information and will be submitted securely to our HIPAA-compliant intake system.
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

// Helper component for medical history sections
function MedicalHistorySection({
  title,
  conditions,
  formData,
  handleMultiCheckboxChange,
  hasSubfield = [],
}: {
  title: string
  conditions: string[]
  formData: FormData
  handleMultiCheckboxChange: (groupName: string, value: string, checked: boolean) => void
  hasSubfield?: string[]
}) {
  const groupId = title.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className="space-y-3">
      <h5 className="font-semibold text-primary-foreground text-sm">{title}</h5>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-4">
        {conditions.map((condition) => (
          <div key={condition} className="space-y-2">
            <div className="flex items-center gap-2">
              <Checkbox
                id={`${groupId}-${condition}`}
                checked={formData[groupId]?.includes(condition) || false}
                onCheckedChange={(checked) =>
                  handleMultiCheckboxChange(groupId, condition, checked as boolean)
                }
              />
              <Label htmlFor={`${groupId}-${condition}`} className="cursor-pointer text-sm">
                {condition}
              </Label>
            </div>
            {hasSubfield.includes(condition) && formData[groupId]?.includes(condition) && (
              <Input
                name={`${groupId}-${condition}-detail`}
                placeholder="Please specify type"
                className="ml-6 mt-1"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
