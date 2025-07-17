import mongoose from 'mongoose';

const QuoteSchema = new mongoose.Schema({
  name: { 
    type: String,
    required: true 
  },
  companyName: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true 
  },
  phone: { 
    type: String, 
    required: true 
  },
  priceRange: { 
    type: String, 
    required: true 
  },
  message: { 
    type: String, 
    required: true 
  }
}, {
  timestamps: true
});

const QuoteModel = mongoose.model('QuoteModel', QuoteSchema);
export default QuoteModel ;  
