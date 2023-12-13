const Supplier = require('../schemas/supplier');


// Controlador para listar todos os Fornecedores
const listSupplier = async (req, res) => {
  try {
    const suppliers = await Supplier.find().sort({ isFavorite: -1 }); // Ordena por favoritos primeiro
    return res.json({ success: true, data: suppliers });
  } catch (error) {
    return res.status(500).json({ success: false, error: 'Erro ao buscar Fornecedor.' });
  }
};

// Controlador para criar um novo Fornecedor
const createSupplier = async (req, res) => {
  const {name, email, telephone, supplierType, observation  } = req.body;
  const newSupplier = new Supplier({ name, email, telephone, supplierType, observation  });

  try {
    await newSupplier.save();
    return res.status(201).json(newSupplier);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao criar Fornecedor.' });
  }
};

// Controlador para atualizar um Fornecedor por ID
const updateSupplier = async (req, res) => {
  const { name, email, telephone, supplierType, observation, isFavorite } = req.body;
  const supplierId = req.params.id;

  try {
    const updatedSupplier = await Supplier.findByIdAndUpdate(
      supplierId,
      { name, email, telephone, supplierType, observation, isFavorite },
      { new: true }
    );

    if (!updatedSupplier) {
      return res.status(404).json({ success: false, message: 'Fornecedor não encontrado.' });
    }

    return res.json({ success: true, data: updatedSupplier });
  } catch (error) {
    return res.status(500).json({ success: false, error: 'Erro ao atualizar Fornecedor.', detailedError: error.message });
  }
};

// Controlador para excluir um Fornecedor por ID
const deleteSupplier = async (req, res) => {
  const supplierId = req.params.id;

  try {
    const supplier = await Supplier.findOneAndDelete({ _id: supplierId });

    if (!supplier) {
      return res.status(404).json({ message: 'Fornecedor não encontrado.' });
    }

    return res.status(204).send(); 
  } catch (error) {
    console.error('Erro ao excluir fornecedor:', error);
    return res.status(500).json({ error: 'Erro ao excluir Fornecedor.' });
  }
};


module.exports = {
  listSupplier,
  createSupplier,
  updateSupplier,
  deleteSupplier
};