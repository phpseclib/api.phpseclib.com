

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '<ul><li data-name="namespace:" class="opened"><div style="padding-left:0px" class="hd"><span class="icon icon-play"></span><a href=".html">[Global Namespace]</a></div><div class="bd"><ul><li data-name="class:Crypt_AES" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="Crypt_AES.html">Crypt_AES</a></div></li><li data-name="class:Crypt_Base" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="Crypt_Base.html">Crypt_Base</a></div></li><li data-name="class:Crypt_Blowfish" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="Crypt_Blowfish.html">Crypt_Blowfish</a></div></li><li data-name="class:Crypt_DES" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="Crypt_DES.html">Crypt_DES</a></div></li><li data-name="class:Crypt_Hash" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="Crypt_Hash.html">Crypt_Hash</a></div></li><li data-name="class:Crypt_RC2" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="Crypt_RC2.html">Crypt_RC2</a></div></li><li data-name="class:Crypt_RC4" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="Crypt_RC4.html">Crypt_RC4</a></div></li><li data-name="class:Crypt_RSA" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="Crypt_RSA.html">Crypt_RSA</a></div></li><li data-name="class:Crypt_Rijndael" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="Crypt_Rijndael.html">Crypt_Rijndael</a></div></li><li data-name="class:Crypt_TripleDES" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="Crypt_TripleDES.html">Crypt_TripleDES</a></div></li><li data-name="class:Crypt_Twofish" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="Crypt_Twofish.html">Crypt_Twofish</a></div></li><li data-name="class:File_ANSI" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="File_ANSI.html">File_ANSI</a></div></li><li data-name="class:File_ASN1" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="File_ASN1.html">File_ASN1</a></div></li><li data-name="class:File_ASN1_Element" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="File_ASN1_Element.html">File_ASN1_Element</a></div></li><li data-name="class:File_X509" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="File_X509.html">File_X509</a></div></li><li data-name="class:Math_BigInteger" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="Math_BigInteger.html">Math_BigInteger</a></div></li><li data-name="class:Net_SCP" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="Net_SCP.html">Net_SCP</a></div></li><li data-name="class:Net_SFTP" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="Net_SFTP.html">Net_SFTP</a></div></li><li data-name="class:Net_SFTP_Stream" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="Net_SFTP_Stream.html">Net_SFTP_Stream</a></div></li><li data-name="class:Net_SSH1" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="Net_SSH1.html">Net_SSH1</a></div></li><li data-name="class:Net_SSH2" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="Net_SSH2.html">Net_SSH2</a></div></li><li data-name="class:System_SSH_Agent" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="System_SSH_Agent.html">System_SSH_Agent</a></div></li><li data-name="class:System_SSH_Agent_Identity" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="System_SSH_Agent_Identity.html">System_SSH_Agent_Identity</a></div></li></ul></div></li></ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                        {"type":"Namespace","link":".html","name":"","doc":"Namespace "},                            {"type":"Class","link":"Crypt_AES.html","name":"Crypt_AES","doc":"Pure-PHP implementation of AES."},
                                {"type":"Method","fromName":"Crypt_AES","fromLink":"Crypt_AES.html","link":"Crypt_AES.html#method_setBlockLength","name":"Crypt_AES::setBlockLength","doc":"Dummy function"},
        {"type":"Method","fromName":"Crypt_AES","fromLink":"Crypt_AES.html","link":"Crypt_AES.html#method_setKeyLength","name":"Crypt_AES::setKeyLength","doc":"Sets the key length"},
        {"type":"Method","fromName":"Crypt_AES","fromLink":"Crypt_AES.html","link":"Crypt_AES.html#method_setKey","name":"Crypt_AES::setKey","doc":"Sets the key."},
            
                    {"type":"Class","link":"Crypt_Base.html","name":"Crypt_Base","doc":"Base Class for all Crypt_* cipher classes"},
                                {"type":"Method","fromName":"Crypt_Base","fromLink":"Crypt_Base.html","link":"Crypt_Base.html#method___construct","name":"Crypt_Base::__construct","doc":"Default Constructor."},
        {"type":"Method","fromName":"Crypt_Base","fromLink":"Crypt_Base.html","link":"Crypt_Base.html#method_Crypt_Base","name":"Crypt_Base::Crypt_Base","doc":"PHP4 compatible Default Constructor."},
        {"type":"Method","fromName":"Crypt_Base","fromLink":"Crypt_Base.html","link":"Crypt_Base.html#method_setIV","name":"Crypt_Base::setIV","doc":"Sets the initialization vector. (optional)"},
        {"type":"Method","fromName":"Crypt_Base","fromLink":"Crypt_Base.html","link":"Crypt_Base.html#method_setKeyLength","name":"Crypt_Base::setKeyLength","doc":"Sets the key length."},
        {"type":"Method","fromName":"Crypt_Base","fromLink":"Crypt_Base.html","link":"Crypt_Base.html#method_getKeyLength","name":"Crypt_Base::getKeyLength","doc":"Returns the current key length in bits"},
        {"type":"Method","fromName":"Crypt_Base","fromLink":"Crypt_Base.html","link":"Crypt_Base.html#method_getBlockLength","name":"Crypt_Base::getBlockLength","doc":"Returns the current block length in bits"},
        {"type":"Method","fromName":"Crypt_Base","fromLink":"Crypt_Base.html","link":"Crypt_Base.html#method_setKey","name":"Crypt_Base::setKey","doc":"Sets the key."},
        {"type":"Method","fromName":"Crypt_Base","fromLink":"Crypt_Base.html","link":"Crypt_Base.html#method_setPassword","name":"Crypt_Base::setPassword","doc":"Sets the password."},
        {"type":"Method","fromName":"Crypt_Base","fromLink":"Crypt_Base.html","link":"Crypt_Base.html#method_encrypt","name":"Crypt_Base::encrypt","doc":"Encrypts a message."},
        {"type":"Method","fromName":"Crypt_Base","fromLink":"Crypt_Base.html","link":"Crypt_Base.html#method_decrypt","name":"Crypt_Base::decrypt","doc":"Decrypts a message."},
        {"type":"Method","fromName":"Crypt_Base","fromLink":"Crypt_Base.html","link":"Crypt_Base.html#method__openssl_ctr_process","name":"Crypt_Base::_openssl_ctr_process","doc":"OpenSSL CTR Processor"},
        {"type":"Method","fromName":"Crypt_Base","fromLink":"Crypt_Base.html","link":"Crypt_Base.html#method__openssl_ofb_process","name":"Crypt_Base::_openssl_ofb_process","doc":"OpenSSL OFB Processor"},
        {"type":"Method","fromName":"Crypt_Base","fromLink":"Crypt_Base.html","link":"Crypt_Base.html#method__openssl_translate_mode","name":"Crypt_Base::_openssl_translate_mode","doc":"phpseclib <-> OpenSSL Mode Mapper"},
        {"type":"Method","fromName":"Crypt_Base","fromLink":"Crypt_Base.html","link":"Crypt_Base.html#method_enablePadding","name":"Crypt_Base::enablePadding","doc":"Pad \"packets\"."},
        {"type":"Method","fromName":"Crypt_Base","fromLink":"Crypt_Base.html","link":"Crypt_Base.html#method_disablePadding","name":"Crypt_Base::disablePadding","doc":"Do not pad packets."},
        {"type":"Method","fromName":"Crypt_Base","fromLink":"Crypt_Base.html","link":"Crypt_Base.html#method_enableContinuousBuffer","name":"Crypt_Base::enableContinuousBuffer","doc":"Treat consecutive \"packets\" as if they are a continuous buffer."},
        {"type":"Method","fromName":"Crypt_Base","fromLink":"Crypt_Base.html","link":"Crypt_Base.html#method_disableContinuousBuffer","name":"Crypt_Base::disableContinuousBuffer","doc":"Treat consecutive packets as if they are a discontinuous buffer."},
        {"type":"Method","fromName":"Crypt_Base","fromLink":"Crypt_Base.html","link":"Crypt_Base.html#method_isValidEngine","name":"Crypt_Base::isValidEngine","doc":"Test for engine validity"},
        {"type":"Method","fromName":"Crypt_Base","fromLink":"Crypt_Base.html","link":"Crypt_Base.html#method_setPreferredEngine","name":"Crypt_Base::setPreferredEngine","doc":"Sets the preferred crypt engine"},
        {"type":"Method","fromName":"Crypt_Base","fromLink":"Crypt_Base.html","link":"Crypt_Base.html#method_getEngine","name":"Crypt_Base::getEngine","doc":"Returns the engine currently being utilized"},
        {"type":"Method","fromName":"Crypt_Base","fromLink":"Crypt_Base.html","link":"Crypt_Base.html#method__setEngine","name":"Crypt_Base::_setEngine","doc":"Sets the engine as appropriate"},
        {"type":"Method","fromName":"Crypt_Base","fromLink":"Crypt_Base.html","link":"Crypt_Base.html#method__encryptBlock","name":"Crypt_Base::_encryptBlock","doc":"Encrypts a block"},
        {"type":"Method","fromName":"Crypt_Base","fromLink":"Crypt_Base.html","link":"Crypt_Base.html#method__decryptBlock","name":"Crypt_Base::_decryptBlock","doc":"Decrypts a block"},
        {"type":"Method","fromName":"Crypt_Base","fromLink":"Crypt_Base.html","link":"Crypt_Base.html#method__setupKey","name":"Crypt_Base::_setupKey","doc":"Setup the key (expansion)"},
        {"type":"Method","fromName":"Crypt_Base","fromLink":"Crypt_Base.html","link":"Crypt_Base.html#method__setup","name":"Crypt_Base::_setup","doc":"Setup the CRYPT_ENGINE_INTERNAL $engine"},
        {"type":"Method","fromName":"Crypt_Base","fromLink":"Crypt_Base.html","link":"Crypt_Base.html#method__setupMcrypt","name":"Crypt_Base::_setupMcrypt","doc":"Setup the CRYPT_ENGINE_MCRYPT $engine"},
        {"type":"Method","fromName":"Crypt_Base","fromLink":"Crypt_Base.html","link":"Crypt_Base.html#method__pad","name":"Crypt_Base::_pad","doc":"Pads a string"},
        {"type":"Method","fromName":"Crypt_Base","fromLink":"Crypt_Base.html","link":"Crypt_Base.html#method__unpad","name":"Crypt_Base::_unpad","doc":"Unpads a string."},
        {"type":"Method","fromName":"Crypt_Base","fromLink":"Crypt_Base.html","link":"Crypt_Base.html#method__clearBuffers","name":"Crypt_Base::_clearBuffers","doc":"Clears internal buffers"},
        {"type":"Method","fromName":"Crypt_Base","fromLink":"Crypt_Base.html","link":"Crypt_Base.html#method__string_shift","name":"Crypt_Base::_string_shift","doc":"String Shift"},
        {"type":"Method","fromName":"Crypt_Base","fromLink":"Crypt_Base.html","link":"Crypt_Base.html#method__string_pop","name":"Crypt_Base::_string_pop","doc":"String Pop"},
        {"type":"Method","fromName":"Crypt_Base","fromLink":"Crypt_Base.html","link":"Crypt_Base.html#method__increment_str","name":"Crypt_Base::_increment_str","doc":"Increment the current string"},
        {"type":"Method","fromName":"Crypt_Base","fromLink":"Crypt_Base.html","link":"Crypt_Base.html#method__setupInlineCrypt","name":"Crypt_Base::_setupInlineCrypt","doc":"Setup the performance-optimized function for de/encrypt()"},
        {"type":"Method","fromName":"Crypt_Base","fromLink":"Crypt_Base.html","link":"Crypt_Base.html#method__createInlineCryptFunction","name":"Crypt_Base::_createInlineCryptFunction","doc":"Creates the performance-optimized function for en/decrypt()"},
        {"type":"Method","fromName":"Crypt_Base","fromLink":"Crypt_Base.html","link":"Crypt_Base.html#method__getLambdaFunctions","name":"Crypt_Base::_getLambdaFunctions","doc":"Holds the lambda_functions table (classwide)"},
        {"type":"Method","fromName":"Crypt_Base","fromLink":"Crypt_Base.html","link":"Crypt_Base.html#method__hashInlineCryptFunction","name":"Crypt_Base::_hashInlineCryptFunction","doc":"Generates a digest from $bytes"},
        {"type":"Method","fromName":"Crypt_Base","fromLink":"Crypt_Base.html","link":"Crypt_Base.html#method_safe_intval","name":"Crypt_Base::safe_intval","doc":"Convert float to int"},
        {"type":"Method","fromName":"Crypt_Base","fromLink":"Crypt_Base.html","link":"Crypt_Base.html#method_safe_intval_inline","name":"Crypt_Base::safe_intval_inline","doc":"eval()'able string for in-line float to int"},
            
                    {"type":"Class","link":"Crypt_Blowfish.html","name":"Crypt_Blowfish","doc":"Pure-PHP implementation of Blowfish."},
                                {"type":"Method","fromName":"Crypt_Blowfish","fromLink":"Crypt_Blowfish.html","link":"Crypt_Blowfish.html#method_setKeyLength","name":"Crypt_Blowfish::setKeyLength","doc":"Sets the key length."},
        {"type":"Method","fromName":"Crypt_Blowfish","fromLink":"Crypt_Blowfish.html","link":"Crypt_Blowfish.html#method_isValidEngine","name":"Crypt_Blowfish::isValidEngine","doc":"Test for engine validity"},
        {"type":"Method","fromName":"Crypt_Blowfish","fromLink":"Crypt_Blowfish.html","link":"Crypt_Blowfish.html#method__setupKey","name":"Crypt_Blowfish::_setupKey","doc":"Setup the key (expansion)"},
        {"type":"Method","fromName":"Crypt_Blowfish","fromLink":"Crypt_Blowfish.html","link":"Crypt_Blowfish.html#method__encryptBlock","name":"Crypt_Blowfish::_encryptBlock","doc":"Encrypts a block"},
        {"type":"Method","fromName":"Crypt_Blowfish","fromLink":"Crypt_Blowfish.html","link":"Crypt_Blowfish.html#method__decryptBlock","name":"Crypt_Blowfish::_decryptBlock","doc":"Decrypts a block"},
        {"type":"Method","fromName":"Crypt_Blowfish","fromLink":"Crypt_Blowfish.html","link":"Crypt_Blowfish.html#method__setupInlineCrypt","name":"Crypt_Blowfish::_setupInlineCrypt","doc":"Setup the performance-optimized function for de/encrypt()"},
            
                    {"type":"Class","link":"Crypt_DES.html","name":"Crypt_DES","doc":"Pure-PHP implementation of DES."},
                                {"type":"Method","fromName":"Crypt_DES","fromLink":"Crypt_DES.html","link":"Crypt_DES.html#method_isValidEngine","name":"Crypt_DES::isValidEngine","doc":"Test for engine validity"},
        {"type":"Method","fromName":"Crypt_DES","fromLink":"Crypt_DES.html","link":"Crypt_DES.html#method_setKey","name":"Crypt_DES::setKey","doc":"Sets the key."},
        {"type":"Method","fromName":"Crypt_DES","fromLink":"Crypt_DES.html","link":"Crypt_DES.html#method__encryptBlock","name":"Crypt_DES::_encryptBlock","doc":"Encrypts a block"},
        {"type":"Method","fromName":"Crypt_DES","fromLink":"Crypt_DES.html","link":"Crypt_DES.html#method__decryptBlock","name":"Crypt_DES::_decryptBlock","doc":"Decrypts a block"},
        {"type":"Method","fromName":"Crypt_DES","fromLink":"Crypt_DES.html","link":"Crypt_DES.html#method__processBlock","name":"Crypt_DES::_processBlock","doc":"Encrypts or decrypts a 64-bit block"},
        {"type":"Method","fromName":"Crypt_DES","fromLink":"Crypt_DES.html","link":"Crypt_DES.html#method__setupKey","name":"Crypt_DES::_setupKey","doc":"Creates the key schedule"},
        {"type":"Method","fromName":"Crypt_DES","fromLink":"Crypt_DES.html","link":"Crypt_DES.html#method__setupInlineCrypt","name":"Crypt_DES::_setupInlineCrypt","doc":"Setup the performance-optimized function for de/encrypt()"},
            
                    {"type":"Class","link":"Crypt_Hash.html","name":"Crypt_Hash","doc":"Pure-PHP implementations of keyed-hash message authentication codes (HMACs) and various cryptographic hashing functions."},
                                {"type":"Method","fromName":"Crypt_Hash","fromLink":"Crypt_Hash.html","link":"Crypt_Hash.html#method___construct","name":"Crypt_Hash::__construct","doc":"Default Constructor."},
        {"type":"Method","fromName":"Crypt_Hash","fromLink":"Crypt_Hash.html","link":"Crypt_Hash.html#method_Crypt_Hash","name":"Crypt_Hash::Crypt_Hash","doc":"PHP4 compatible Default Constructor."},
        {"type":"Method","fromName":"Crypt_Hash","fromLink":"Crypt_Hash.html","link":"Crypt_Hash.html#method_setKey","name":"Crypt_Hash::setKey","doc":"Sets the key for HMACs"},
        {"type":"Method","fromName":"Crypt_Hash","fromLink":"Crypt_Hash.html","link":"Crypt_Hash.html#method__computeKey","name":"Crypt_Hash::_computeKey","doc":"Pre-compute the key used by the HMAC"},
        {"type":"Method","fromName":"Crypt_Hash","fromLink":"Crypt_Hash.html","link":"Crypt_Hash.html#method_getHash","name":"Crypt_Hash::getHash","doc":"Gets the hash function."},
        {"type":"Method","fromName":"Crypt_Hash","fromLink":"Crypt_Hash.html","link":"Crypt_Hash.html#method_setHash","name":"Crypt_Hash::setHash","doc":"Sets the hash function."},
        {"type":"Method","fromName":"Crypt_Hash","fromLink":"Crypt_Hash.html","link":"Crypt_Hash.html#method_hash","name":"Crypt_Hash::hash","doc":"Compute the HMAC."},
        {"type":"Method","fromName":"Crypt_Hash","fromLink":"Crypt_Hash.html","link":"Crypt_Hash.html#method_getLength","name":"Crypt_Hash::getLength","doc":"Returns the hash length (in bytes)"},
        {"type":"Method","fromName":"Crypt_Hash","fromLink":"Crypt_Hash.html","link":"Crypt_Hash.html#method__md5","name":"Crypt_Hash::_md5","doc":"Wrapper for MD5"},
        {"type":"Method","fromName":"Crypt_Hash","fromLink":"Crypt_Hash.html","link":"Crypt_Hash.html#method__sha1","name":"Crypt_Hash::_sha1","doc":"Wrapper for SHA1"},
        {"type":"Method","fromName":"Crypt_Hash","fromLink":"Crypt_Hash.html","link":"Crypt_Hash.html#method__md2","name":"Crypt_Hash::_md2","doc":"Pure-PHP implementation of MD2"},
        {"type":"Method","fromName":"Crypt_Hash","fromLink":"Crypt_Hash.html","link":"Crypt_Hash.html#method__sha256","name":"Crypt_Hash::_sha256","doc":"Pure-PHP implementation of SHA256"},
        {"type":"Method","fromName":"Crypt_Hash","fromLink":"Crypt_Hash.html","link":"Crypt_Hash.html#method__sha512","name":"Crypt_Hash::_sha512","doc":"Pure-PHP implementation of SHA384 and SHA512"},
        {"type":"Method","fromName":"Crypt_Hash","fromLink":"Crypt_Hash.html","link":"Crypt_Hash.html#method__rightRotate","name":"Crypt_Hash::_rightRotate","doc":"Right Rotate"},
        {"type":"Method","fromName":"Crypt_Hash","fromLink":"Crypt_Hash.html","link":"Crypt_Hash.html#method__rightShift","name":"Crypt_Hash::_rightShift","doc":"Right Shift"},
        {"type":"Method","fromName":"Crypt_Hash","fromLink":"Crypt_Hash.html","link":"Crypt_Hash.html#method__not","name":"Crypt_Hash::_not","doc":"Not"},
        {"type":"Method","fromName":"Crypt_Hash","fromLink":"Crypt_Hash.html","link":"Crypt_Hash.html#method__add","name":"Crypt_Hash::_add","doc":"Add"},
        {"type":"Method","fromName":"Crypt_Hash","fromLink":"Crypt_Hash.html","link":"Crypt_Hash.html#method__string_shift","name":"Crypt_Hash::_string_shift","doc":"String Shift"},
            
                    {"type":"Class","link":"Crypt_RC2.html","name":"Crypt_RC2","doc":"Pure-PHP implementation of RC2."},
                                {"type":"Method","fromName":"Crypt_RC2","fromLink":"Crypt_RC2.html","link":"Crypt_RC2.html#method_isValidEngine","name":"Crypt_RC2::isValidEngine","doc":"Test for engine validity"},
        {"type":"Method","fromName":"Crypt_RC2","fromLink":"Crypt_RC2.html","link":"Crypt_RC2.html#method_setKeyLength","name":"Crypt_RC2::setKeyLength","doc":"Sets the key length."},
        {"type":"Method","fromName":"Crypt_RC2","fromLink":"Crypt_RC2.html","link":"Crypt_RC2.html#method_getKeyLength","name":"Crypt_RC2::getKeyLength","doc":"Returns the current key length"},
        {"type":"Method","fromName":"Crypt_RC2","fromLink":"Crypt_RC2.html","link":"Crypt_RC2.html#method_setKey","name":"Crypt_RC2::setKey","doc":"Sets the key."},
        {"type":"Method","fromName":"Crypt_RC2","fromLink":"Crypt_RC2.html","link":"Crypt_RC2.html#method_encrypt","name":"Crypt_RC2::encrypt","doc":"Encrypts a message."},
        {"type":"Method","fromName":"Crypt_RC2","fromLink":"Crypt_RC2.html","link":"Crypt_RC2.html#method_decrypt","name":"Crypt_RC2::decrypt","doc":"Decrypts a message."},
        {"type":"Method","fromName":"Crypt_RC2","fromLink":"Crypt_RC2.html","link":"Crypt_RC2.html#method__encryptBlock","name":"Crypt_RC2::_encryptBlock","doc":"Encrypts a block"},
        {"type":"Method","fromName":"Crypt_RC2","fromLink":"Crypt_RC2.html","link":"Crypt_RC2.html#method__decryptBlock","name":"Crypt_RC2::_decryptBlock","doc":"Decrypts a block"},
        {"type":"Method","fromName":"Crypt_RC2","fromLink":"Crypt_RC2.html","link":"Crypt_RC2.html#method__setupMcrypt","name":"Crypt_RC2::_setupMcrypt","doc":"Setup the CRYPT_ENGINE_MCRYPT $engine"},
        {"type":"Method","fromName":"Crypt_RC2","fromLink":"Crypt_RC2.html","link":"Crypt_RC2.html#method__setupKey","name":"Crypt_RC2::_setupKey","doc":"Creates the key schedule"},
        {"type":"Method","fromName":"Crypt_RC2","fromLink":"Crypt_RC2.html","link":"Crypt_RC2.html#method__setupInlineCrypt","name":"Crypt_RC2::_setupInlineCrypt","doc":"Setup the performance-optimized function for de/encrypt()"},
            
                    {"type":"Class","link":"Crypt_RC4.html","name":"Crypt_RC4","doc":"Pure-PHP implementation of RC4."},
                                {"type":"Method","fromName":"Crypt_RC4","fromLink":"Crypt_RC4.html","link":"Crypt_RC4.html#method___construct","name":"Crypt_RC4::__construct","doc":"Default Constructor."},
        {"type":"Method","fromName":"Crypt_RC4","fromLink":"Crypt_RC4.html","link":"Crypt_RC4.html#method_Crypt_RC4","name":"Crypt_RC4::Crypt_RC4","doc":"PHP4 compatible Default Constructor."},
        {"type":"Method","fromName":"Crypt_RC4","fromLink":"Crypt_RC4.html","link":"Crypt_RC4.html#method_isValidEngine","name":"Crypt_RC4::isValidEngine","doc":"Test for engine validity"},
        {"type":"Method","fromName":"Crypt_RC4","fromLink":"Crypt_RC4.html","link":"Crypt_RC4.html#method_setIV","name":"Crypt_RC4::setIV","doc":"Dummy function."},
        {"type":"Method","fromName":"Crypt_RC4","fromLink":"Crypt_RC4.html","link":"Crypt_RC4.html#method_setKeyLength","name":"Crypt_RC4::setKeyLength","doc":"Sets the key length"},
        {"type":"Method","fromName":"Crypt_RC4","fromLink":"Crypt_RC4.html","link":"Crypt_RC4.html#method_encrypt","name":"Crypt_RC4::encrypt","doc":"Encrypts a message."},
        {"type":"Method","fromName":"Crypt_RC4","fromLink":"Crypt_RC4.html","link":"Crypt_RC4.html#method_decrypt","name":"Crypt_RC4::decrypt","doc":"Decrypts a message."},
        {"type":"Method","fromName":"Crypt_RC4","fromLink":"Crypt_RC4.html","link":"Crypt_RC4.html#method__setupKey","name":"Crypt_RC4::_setupKey","doc":"Setup the key (expansion)"},
        {"type":"Method","fromName":"Crypt_RC4","fromLink":"Crypt_RC4.html","link":"Crypt_RC4.html#method__crypt","name":"Crypt_RC4::_crypt","doc":"Encrypts or decrypts a message."},
            
                    {"type":"Class","link":"Crypt_RSA.html","name":"Crypt_RSA","doc":"Pure-PHP PKCS#1 compliant implementation of RSA."},
                                {"type":"Method","fromName":"Crypt_RSA","fromLink":"Crypt_RSA.html","link":"Crypt_RSA.html#method___construct","name":"Crypt_RSA::__construct","doc":"The constructor"},
        {"type":"Method","fromName":"Crypt_RSA","fromLink":"Crypt_RSA.html","link":"Crypt_RSA.html#method_Crypt_RSA","name":"Crypt_RSA::Crypt_RSA","doc":"PHP4 compatible Default Constructor."},
        {"type":"Method","fromName":"Crypt_RSA","fromLink":"Crypt_RSA.html","link":"Crypt_RSA.html#method_createKey","name":"Crypt_RSA::createKey","doc":"Create public / private key pair"},
        {"type":"Method","fromName":"Crypt_RSA","fromLink":"Crypt_RSA.html","link":"Crypt_RSA.html#method__convertPrivateKey","name":"Crypt_RSA::_convertPrivateKey","doc":"Convert a private key to the appropriate format."},
        {"type":"Method","fromName":"Crypt_RSA","fromLink":"Crypt_RSA.html","link":"Crypt_RSA.html#method__convertPublicKey","name":"Crypt_RSA::_convertPublicKey","doc":"Convert a public key to the appropriate format"},
        {"type":"Method","fromName":"Crypt_RSA","fromLink":"Crypt_RSA.html","link":"Crypt_RSA.html#method__parseKey","name":"Crypt_RSA::_parseKey","doc":"Break a public or private key down into its constituant components"},
        {"type":"Method","fromName":"Crypt_RSA","fromLink":"Crypt_RSA.html","link":"Crypt_RSA.html#method_getSize","name":"Crypt_RSA::getSize","doc":"Returns the key size"},
        {"type":"Method","fromName":"Crypt_RSA","fromLink":"Crypt_RSA.html","link":"Crypt_RSA.html#method__start_element_handler","name":"Crypt_RSA::_start_element_handler","doc":"Start Element Handler"},
        {"type":"Method","fromName":"Crypt_RSA","fromLink":"Crypt_RSA.html","link":"Crypt_RSA.html#method__stop_element_handler","name":"Crypt_RSA::_stop_element_handler","doc":"Stop Element Handler"},
        {"type":"Method","fromName":"Crypt_RSA","fromLink":"Crypt_RSA.html","link":"Crypt_RSA.html#method__data_handler","name":"Crypt_RSA::_data_handler","doc":"Data Handler"},
        {"type":"Method","fromName":"Crypt_RSA","fromLink":"Crypt_RSA.html","link":"Crypt_RSA.html#method_loadKey","name":"Crypt_RSA::loadKey","doc":"Loads a public or private key"},
        {"type":"Method","fromName":"Crypt_RSA","fromLink":"Crypt_RSA.html","link":"Crypt_RSA.html#method_setPassword","name":"Crypt_RSA::setPassword","doc":"Sets the password"},
        {"type":"Method","fromName":"Crypt_RSA","fromLink":"Crypt_RSA.html","link":"Crypt_RSA.html#method_setPublicKey","name":"Crypt_RSA::setPublicKey","doc":"Defines the public key"},
        {"type":"Method","fromName":"Crypt_RSA","fromLink":"Crypt_RSA.html","link":"Crypt_RSA.html#method_setPrivateKey","name":"Crypt_RSA::setPrivateKey","doc":"Defines the private key"},
        {"type":"Method","fromName":"Crypt_RSA","fromLink":"Crypt_RSA.html","link":"Crypt_RSA.html#method_getPublicKey","name":"Crypt_RSA::getPublicKey","doc":"Returns the public key"},
        {"type":"Method","fromName":"Crypt_RSA","fromLink":"Crypt_RSA.html","link":"Crypt_RSA.html#method_getPublicKeyFingerprint","name":"Crypt_RSA::getPublicKeyFingerprint","doc":"Returns the public key's fingerprint"},
        {"type":"Method","fromName":"Crypt_RSA","fromLink":"Crypt_RSA.html","link":"Crypt_RSA.html#method_getPrivateKey","name":"Crypt_RSA::getPrivateKey","doc":"Returns the private key"},
        {"type":"Method","fromName":"Crypt_RSA","fromLink":"Crypt_RSA.html","link":"Crypt_RSA.html#method__getPrivatePublicKey","name":"Crypt_RSA::_getPrivatePublicKey","doc":"Returns a minimalistic private key"},
        {"type":"Method","fromName":"Crypt_RSA","fromLink":"Crypt_RSA.html","link":"Crypt_RSA.html#method___toString","name":"Crypt_RSA::__toString","doc":"__toString() magic method"},
        {"type":"Method","fromName":"Crypt_RSA","fromLink":"Crypt_RSA.html","link":"Crypt_RSA.html#method___clone","name":"Crypt_RSA::__clone","doc":"__clone() magic method"},
        {"type":"Method","fromName":"Crypt_RSA","fromLink":"Crypt_RSA.html","link":"Crypt_RSA.html#method__generateMinMax","name":"Crypt_RSA::_generateMinMax","doc":"Generates the smallest and largest numbers requiring $bits bits"},
        {"type":"Method","fromName":"Crypt_RSA","fromLink":"Crypt_RSA.html","link":"Crypt_RSA.html#method__decodeLength","name":"Crypt_RSA::_decodeLength","doc":"DER-decode the length"},
        {"type":"Method","fromName":"Crypt_RSA","fromLink":"Crypt_RSA.html","link":"Crypt_RSA.html#method__encodeLength","name":"Crypt_RSA::_encodeLength","doc":"DER-encode the length"},
        {"type":"Method","fromName":"Crypt_RSA","fromLink":"Crypt_RSA.html","link":"Crypt_RSA.html#method__string_shift","name":"Crypt_RSA::_string_shift","doc":"String Shift"},
        {"type":"Method","fromName":"Crypt_RSA","fromLink":"Crypt_RSA.html","link":"Crypt_RSA.html#method_setPrivateKeyFormat","name":"Crypt_RSA::setPrivateKeyFormat","doc":"Determines the private key format"},
        {"type":"Method","fromName":"Crypt_RSA","fromLink":"Crypt_RSA.html","link":"Crypt_RSA.html#method_setPublicKeyFormat","name":"Crypt_RSA::setPublicKeyFormat","doc":"Determines the public key format"},
        {"type":"Method","fromName":"Crypt_RSA","fromLink":"Crypt_RSA.html","link":"Crypt_RSA.html#method_setHash","name":"Crypt_RSA::setHash","doc":"Determines which hashing function should be used"},
        {"type":"Method","fromName":"Crypt_RSA","fromLink":"Crypt_RSA.html","link":"Crypt_RSA.html#method_setMGFHash","name":"Crypt_RSA::setMGFHash","doc":"Determines which hashing function should be used for the mask generation function"},
        {"type":"Method","fromName":"Crypt_RSA","fromLink":"Crypt_RSA.html","link":"Crypt_RSA.html#method_setSaltLength","name":"Crypt_RSA::setSaltLength","doc":"Determines the salt length"},
        {"type":"Method","fromName":"Crypt_RSA","fromLink":"Crypt_RSA.html","link":"Crypt_RSA.html#method__i2osp","name":"Crypt_RSA::_i2osp","doc":"Integer-to-Octet-String primitive"},
        {"type":"Method","fromName":"Crypt_RSA","fromLink":"Crypt_RSA.html","link":"Crypt_RSA.html#method__os2ip","name":"Crypt_RSA::_os2ip","doc":"Octet-String-to-Integer primitive"},
        {"type":"Method","fromName":"Crypt_RSA","fromLink":"Crypt_RSA.html","link":"Crypt_RSA.html#method__exponentiate","name":"Crypt_RSA::_exponentiate","doc":"Exponentiate with or without Chinese Remainder Theorem"},
        {"type":"Method","fromName":"Crypt_RSA","fromLink":"Crypt_RSA.html","link":"Crypt_RSA.html#method__blind","name":"Crypt_RSA::_blind","doc":"Performs RSA Blinding"},
        {"type":"Method","fromName":"Crypt_RSA","fromLink":"Crypt_RSA.html","link":"Crypt_RSA.html#method__equals","name":"Crypt_RSA::_equals","doc":"Performs blinded RSA equality testing"},
        {"type":"Method","fromName":"Crypt_RSA","fromLink":"Crypt_RSA.html","link":"Crypt_RSA.html#method__rsaep","name":"Crypt_RSA::_rsaep","doc":"RSAEP"},
        {"type":"Method","fromName":"Crypt_RSA","fromLink":"Crypt_RSA.html","link":"Crypt_RSA.html#method__rsadp","name":"Crypt_RSA::_rsadp","doc":"RSADP"},
        {"type":"Method","fromName":"Crypt_RSA","fromLink":"Crypt_RSA.html","link":"Crypt_RSA.html#method__rsasp1","name":"Crypt_RSA::_rsasp1","doc":"RSASP1"},
        {"type":"Method","fromName":"Crypt_RSA","fromLink":"Crypt_RSA.html","link":"Crypt_RSA.html#method__rsavp1","name":"Crypt_RSA::_rsavp1","doc":"RSAVP1"},
        {"type":"Method","fromName":"Crypt_RSA","fromLink":"Crypt_RSA.html","link":"Crypt_RSA.html#method__mgf1","name":"Crypt_RSA::_mgf1","doc":"MGF1"},
        {"type":"Method","fromName":"Crypt_RSA","fromLink":"Crypt_RSA.html","link":"Crypt_RSA.html#method__rsaes_oaep_encrypt","name":"Crypt_RSA::_rsaes_oaep_encrypt","doc":"RSAES-OAEP-ENCRYPT"},
        {"type":"Method","fromName":"Crypt_RSA","fromLink":"Crypt_RSA.html","link":"Crypt_RSA.html#method__rsaes_oaep_decrypt","name":"Crypt_RSA::_rsaes_oaep_decrypt","doc":"RSAES-OAEP-DECRYPT"},
        {"type":"Method","fromName":"Crypt_RSA","fromLink":"Crypt_RSA.html","link":"Crypt_RSA.html#method__raw_encrypt","name":"Crypt_RSA::_raw_encrypt","doc":"Raw Encryption / Decryption"},
        {"type":"Method","fromName":"Crypt_RSA","fromLink":"Crypt_RSA.html","link":"Crypt_RSA.html#method__rsaes_pkcs1_v1_5_encrypt","name":"Crypt_RSA::_rsaes_pkcs1_v1_5_encrypt","doc":"RSAES-PKCS1-V1_5-ENCRYPT"},
        {"type":"Method","fromName":"Crypt_RSA","fromLink":"Crypt_RSA.html","link":"Crypt_RSA.html#method__rsaes_pkcs1_v1_5_decrypt","name":"Crypt_RSA::_rsaes_pkcs1_v1_5_decrypt","doc":"RSAES-PKCS1-V1_5-DECRYPT"},
        {"type":"Method","fromName":"Crypt_RSA","fromLink":"Crypt_RSA.html","link":"Crypt_RSA.html#method__emsa_pss_encode","name":"Crypt_RSA::_emsa_pss_encode","doc":"EMSA-PSS-ENCODE"},
        {"type":"Method","fromName":"Crypt_RSA","fromLink":"Crypt_RSA.html","link":"Crypt_RSA.html#method__emsa_pss_verify","name":"Crypt_RSA::_emsa_pss_verify","doc":"EMSA-PSS-VERIFY"},
        {"type":"Method","fromName":"Crypt_RSA","fromLink":"Crypt_RSA.html","link":"Crypt_RSA.html#method__rsassa_pss_sign","name":"Crypt_RSA::_rsassa_pss_sign","doc":"RSASSA-PSS-SIGN"},
        {"type":"Method","fromName":"Crypt_RSA","fromLink":"Crypt_RSA.html","link":"Crypt_RSA.html#method__rsassa_pss_verify","name":"Crypt_RSA::_rsassa_pss_verify","doc":"RSASSA-PSS-VERIFY"},
        {"type":"Method","fromName":"Crypt_RSA","fromLink":"Crypt_RSA.html","link":"Crypt_RSA.html#method__emsa_pkcs1_v1_5_encode","name":"Crypt_RSA::_emsa_pkcs1_v1_5_encode","doc":"EMSA-PKCS1-V1_5-ENCODE"},
        {"type":"Method","fromName":"Crypt_RSA","fromLink":"Crypt_RSA.html","link":"Crypt_RSA.html#method__rsassa_pkcs1_v1_5_sign","name":"Crypt_RSA::_rsassa_pkcs1_v1_5_sign","doc":"RSASSA-PKCS1-V1_5-SIGN"},
        {"type":"Method","fromName":"Crypt_RSA","fromLink":"Crypt_RSA.html","link":"Crypt_RSA.html#method__rsassa_pkcs1_v1_5_verify","name":"Crypt_RSA::_rsassa_pkcs1_v1_5_verify","doc":"RSASSA-PKCS1-V1_5-VERIFY"},
        {"type":"Method","fromName":"Crypt_RSA","fromLink":"Crypt_RSA.html","link":"Crypt_RSA.html#method_setEncryptionMode","name":"Crypt_RSA::setEncryptionMode","doc":"Set Encryption Mode"},
        {"type":"Method","fromName":"Crypt_RSA","fromLink":"Crypt_RSA.html","link":"Crypt_RSA.html#method_setSignatureMode","name":"Crypt_RSA::setSignatureMode","doc":"Set Signature Mode"},
        {"type":"Method","fromName":"Crypt_RSA","fromLink":"Crypt_RSA.html","link":"Crypt_RSA.html#method_setComment","name":"Crypt_RSA::setComment","doc":"Set public key comment."},
        {"type":"Method","fromName":"Crypt_RSA","fromLink":"Crypt_RSA.html","link":"Crypt_RSA.html#method_getComment","name":"Crypt_RSA::getComment","doc":"Get public key comment."},
        {"type":"Method","fromName":"Crypt_RSA","fromLink":"Crypt_RSA.html","link":"Crypt_RSA.html#method_encrypt","name":"Crypt_RSA::encrypt","doc":"Encryption"},
        {"type":"Method","fromName":"Crypt_RSA","fromLink":"Crypt_RSA.html","link":"Crypt_RSA.html#method_decrypt","name":"Crypt_RSA::decrypt","doc":"Decryption"},
        {"type":"Method","fromName":"Crypt_RSA","fromLink":"Crypt_RSA.html","link":"Crypt_RSA.html#method_sign","name":"Crypt_RSA::sign","doc":"Create a signature"},
        {"type":"Method","fromName":"Crypt_RSA","fromLink":"Crypt_RSA.html","link":"Crypt_RSA.html#method_verify","name":"Crypt_RSA::verify","doc":"Verifies a signature"},
        {"type":"Method","fromName":"Crypt_RSA","fromLink":"Crypt_RSA.html","link":"Crypt_RSA.html#method__extractBER","name":"Crypt_RSA::_extractBER","doc":"Extract raw BER from Base64 encoding"},
            
                    {"type":"Class","link":"Crypt_Rijndael.html","name":"Crypt_Rijndael","doc":"Pure-PHP implementation of Rijndael."},
                                {"type":"Method","fromName":"Crypt_Rijndael","fromLink":"Crypt_Rijndael.html","link":"Crypt_Rijndael.html#method_setKey","name":"Crypt_Rijndael::setKey","doc":"Sets the key."},
        {"type":"Method","fromName":"Crypt_Rijndael","fromLink":"Crypt_Rijndael.html","link":"Crypt_Rijndael.html#method_setKeyLength","name":"Crypt_Rijndael::setKeyLength","doc":"Sets the key length"},
        {"type":"Method","fromName":"Crypt_Rijndael","fromLink":"Crypt_Rijndael.html","link":"Crypt_Rijndael.html#method_setBlockLength","name":"Crypt_Rijndael::setBlockLength","doc":"Sets the block length"},
        {"type":"Method","fromName":"Crypt_Rijndael","fromLink":"Crypt_Rijndael.html","link":"Crypt_Rijndael.html#method_isValidEngine","name":"Crypt_Rijndael::isValidEngine","doc":"Test for engine validity"},
        {"type":"Method","fromName":"Crypt_Rijndael","fromLink":"Crypt_Rijndael.html","link":"Crypt_Rijndael.html#method__encryptBlock","name":"Crypt_Rijndael::_encryptBlock","doc":"Encrypts a block"},
        {"type":"Method","fromName":"Crypt_Rijndael","fromLink":"Crypt_Rijndael.html","link":"Crypt_Rijndael.html#method__decryptBlock","name":"Crypt_Rijndael::_decryptBlock","doc":"Decrypts a block"},
        {"type":"Method","fromName":"Crypt_Rijndael","fromLink":"Crypt_Rijndael.html","link":"Crypt_Rijndael.html#method__setupKey","name":"Crypt_Rijndael::_setupKey","doc":"Setup the key (expansion)"},
        {"type":"Method","fromName":"Crypt_Rijndael","fromLink":"Crypt_Rijndael.html","link":"Crypt_Rijndael.html#method__subWord","name":"Crypt_Rijndael::_subWord","doc":"Performs S-Box substitutions"},
        {"type":"Method","fromName":"Crypt_Rijndael","fromLink":"Crypt_Rijndael.html","link":"Crypt_Rijndael.html#method__getTables","name":"Crypt_Rijndael::_getTables","doc":"Provides the mixColumns and sboxes tables"},
        {"type":"Method","fromName":"Crypt_Rijndael","fromLink":"Crypt_Rijndael.html","link":"Crypt_Rijndael.html#method__getInvTables","name":"Crypt_Rijndael::_getInvTables","doc":"Provides the inverse mixColumns and inverse sboxes tables"},
        {"type":"Method","fromName":"Crypt_Rijndael","fromLink":"Crypt_Rijndael.html","link":"Crypt_Rijndael.html#method__setupInlineCrypt","name":"Crypt_Rijndael::_setupInlineCrypt","doc":"Setup the performance-optimized function for de/encrypt()"},
            
                    {"type":"Class","link":"Crypt_TripleDES.html","name":"Crypt_TripleDES","doc":"Pure-PHP implementation of Triple DES."},
                                {"type":"Method","fromName":"Crypt_TripleDES","fromLink":"Crypt_TripleDES.html","link":"Crypt_TripleDES.html#method___construct","name":"Crypt_TripleDES::__construct","doc":"Default Constructor."},
        {"type":"Method","fromName":"Crypt_TripleDES","fromLink":"Crypt_TripleDES.html","link":"Crypt_TripleDES.html#method_Crypt_TripleDES","name":"Crypt_TripleDES::Crypt_TripleDES","doc":"PHP4 compatible Default Constructor."},
        {"type":"Method","fromName":"Crypt_TripleDES","fromLink":"Crypt_TripleDES.html","link":"Crypt_TripleDES.html#method_isValidEngine","name":"Crypt_TripleDES::isValidEngine","doc":"Test for engine validity"},
        {"type":"Method","fromName":"Crypt_TripleDES","fromLink":"Crypt_TripleDES.html","link":"Crypt_TripleDES.html#method_setIV","name":"Crypt_TripleDES::setIV","doc":"Sets the initialization vector. (optional)"},
        {"type":"Method","fromName":"Crypt_TripleDES","fromLink":"Crypt_TripleDES.html","link":"Crypt_TripleDES.html#method_setKeyLength","name":"Crypt_TripleDES::setKeyLength","doc":"Sets the key length."},
        {"type":"Method","fromName":"Crypt_TripleDES","fromLink":"Crypt_TripleDES.html","link":"Crypt_TripleDES.html#method_setKey","name":"Crypt_TripleDES::setKey","doc":"Sets the key."},
        {"type":"Method","fromName":"Crypt_TripleDES","fromLink":"Crypt_TripleDES.html","link":"Crypt_TripleDES.html#method_encrypt","name":"Crypt_TripleDES::encrypt","doc":"Encrypts a message."},
        {"type":"Method","fromName":"Crypt_TripleDES","fromLink":"Crypt_TripleDES.html","link":"Crypt_TripleDES.html#method_decrypt","name":"Crypt_TripleDES::decrypt","doc":"Decrypts a message."},
        {"type":"Method","fromName":"Crypt_TripleDES","fromLink":"Crypt_TripleDES.html","link":"Crypt_TripleDES.html#method_enableContinuousBuffer","name":"Crypt_TripleDES::enableContinuousBuffer","doc":"Treat consecutive \"packets\" as if they are a continuous buffer."},
        {"type":"Method","fromName":"Crypt_TripleDES","fromLink":"Crypt_TripleDES.html","link":"Crypt_TripleDES.html#method_disableContinuousBuffer","name":"Crypt_TripleDES::disableContinuousBuffer","doc":"Treat consecutive packets as if they are a discontinuous buffer."},
        {"type":"Method","fromName":"Crypt_TripleDES","fromLink":"Crypt_TripleDES.html","link":"Crypt_TripleDES.html#method__setupKey","name":"Crypt_TripleDES::_setupKey","doc":"Creates the key schedule"},
        {"type":"Method","fromName":"Crypt_TripleDES","fromLink":"Crypt_TripleDES.html","link":"Crypt_TripleDES.html#method_setPreferredEngine","name":"Crypt_TripleDES::setPreferredEngine","doc":"Sets the internal crypt engine"},
            
                    {"type":"Class","link":"Crypt_Twofish.html","name":"Crypt_Twofish","doc":"Pure-PHP implementation of Twofish."},
                                {"type":"Method","fromName":"Crypt_Twofish","fromLink":"Crypt_Twofish.html","link":"Crypt_Twofish.html#method_setKeyLength","name":"Crypt_Twofish::setKeyLength","doc":"Sets the key length."},
        {"type":"Method","fromName":"Crypt_Twofish","fromLink":"Crypt_Twofish.html","link":"Crypt_Twofish.html#method__setupKey","name":"Crypt_Twofish::_setupKey","doc":"Setup the key (expansion)"},
        {"type":"Method","fromName":"Crypt_Twofish","fromLink":"Crypt_Twofish.html","link":"Crypt_Twofish.html#method__mdsrem","name":"Crypt_Twofish::_mdsrem","doc":"_mdsrem function using by the twofish cipher algorithm"},
        {"type":"Method","fromName":"Crypt_Twofish","fromLink":"Crypt_Twofish.html","link":"Crypt_Twofish.html#method__encryptBlock","name":"Crypt_Twofish::_encryptBlock","doc":"Encrypts a block"},
        {"type":"Method","fromName":"Crypt_Twofish","fromLink":"Crypt_Twofish.html","link":"Crypt_Twofish.html#method__decryptBlock","name":"Crypt_Twofish::_decryptBlock","doc":"Decrypts a block"},
        {"type":"Method","fromName":"Crypt_Twofish","fromLink":"Crypt_Twofish.html","link":"Crypt_Twofish.html#method__setupInlineCrypt","name":"Crypt_Twofish::_setupInlineCrypt","doc":"Setup the performance-optimized function for de/encrypt()"},
            
                    {"type":"Class","link":"File_ANSI.html","name":"File_ANSI","doc":"Pure-PHP ANSI Decoder"},
                                {"type":"Method","fromName":"File_ANSI","fromLink":"File_ANSI.html","link":"File_ANSI.html#method___construct","name":"File_ANSI::__construct","doc":"Default Constructor."},
        {"type":"Method","fromName":"File_ANSI","fromLink":"File_ANSI.html","link":"File_ANSI.html#method_File_ANSI","name":"File_ANSI::File_ANSI","doc":"PHP4 compatible Default Constructor."},
        {"type":"Method","fromName":"File_ANSI","fromLink":"File_ANSI.html","link":"File_ANSI.html#method_setDimensions","name":"File_ANSI::setDimensions","doc":"Set terminal width and height"},
        {"type":"Method","fromName":"File_ANSI","fromLink":"File_ANSI.html","link":"File_ANSI.html#method_setHistory","name":"File_ANSI::setHistory","doc":"Set the number of lines that should be logged past the terminal height"},
        {"type":"Method","fromName":"File_ANSI","fromLink":"File_ANSI.html","link":"File_ANSI.html#method_loadString","name":"File_ANSI::loadString","doc":"Load a string"},
        {"type":"Method","fromName":"File_ANSI","fromLink":"File_ANSI.html","link":"File_ANSI.html#method_appendString","name":"File_ANSI::appendString","doc":"Appdend a string"},
        {"type":"Method","fromName":"File_ANSI","fromLink":"File_ANSI.html","link":"File_ANSI.html#method__newLine","name":"File_ANSI::_newLine","doc":"Add a new line"},
        {"type":"Method","fromName":"File_ANSI","fromLink":"File_ANSI.html","link":"File_ANSI.html#method__processCoordinate","name":"File_ANSI::_processCoordinate","doc":"Returns the current coordinate without preformating"},
        {"type":"Method","fromName":"File_ANSI","fromLink":"File_ANSI.html","link":"File_ANSI.html#method__getScreen","name":"File_ANSI::_getScreen","doc":"Returns the current screen without preformating"},
        {"type":"Method","fromName":"File_ANSI","fromLink":"File_ANSI.html","link":"File_ANSI.html#method_getScreen","name":"File_ANSI::getScreen","doc":"Returns the current screen"},
        {"type":"Method","fromName":"File_ANSI","fromLink":"File_ANSI.html","link":"File_ANSI.html#method_getHistory","name":"File_ANSI::getHistory","doc":"Returns the current screen and the x previous lines"},
            
                    {"type":"Class","link":"File_ASN1.html","name":"File_ASN1","doc":"Pure-PHP ASN.1 Parser"},
                                {"type":"Method","fromName":"File_ASN1","fromLink":"File_ASN1.html","link":"File_ASN1.html#method___construct","name":"File_ASN1::__construct","doc":"Default Constructor."},
        {"type":"Method","fromName":"File_ASN1","fromLink":"File_ASN1.html","link":"File_ASN1.html#method_File_ASN1","name":"File_ASN1::File_ASN1","doc":"PHP4 compatible Default Constructor."},
        {"type":"Method","fromName":"File_ASN1","fromLink":"File_ASN1.html","link":"File_ASN1.html#method_decodeBER","name":"File_ASN1::decodeBER","doc":"Parse BER-encoding"},
        {"type":"Method","fromName":"File_ASN1","fromLink":"File_ASN1.html","link":"File_ASN1.html#method__decode_ber","name":"File_ASN1::_decode_ber","doc":"Parse BER-encoding (Helper function)"},
        {"type":"Method","fromName":"File_ASN1","fromLink":"File_ASN1.html","link":"File_ASN1.html#method_asn1map","name":"File_ASN1::asn1map","doc":"ASN.1 Map"},
        {"type":"Method","fromName":"File_ASN1","fromLink":"File_ASN1.html","link":"File_ASN1.html#method_encodeDER","name":"File_ASN1::encodeDER","doc":"ASN.1 Encode"},
        {"type":"Method","fromName":"File_ASN1","fromLink":"File_ASN1.html","link":"File_ASN1.html#method__encode_der","name":"File_ASN1::_encode_der","doc":"ASN.1 Encode (Helper function)"},
        {"type":"Method","fromName":"File_ASN1","fromLink":"File_ASN1.html","link":"File_ASN1.html#method__encodeLength","name":"File_ASN1::_encodeLength","doc":"DER-encode the length"},
        {"type":"Method","fromName":"File_ASN1","fromLink":"File_ASN1.html","link":"File_ASN1.html#method__decodeOID","name":"File_ASN1::_decodeOID","doc":"BER-decode the OID"},
        {"type":"Method","fromName":"File_ASN1","fromLink":"File_ASN1.html","link":"File_ASN1.html#method__encodeOID","name":"File_ASN1::_encodeOID","doc":"DER-encode the OID"},
        {"type":"Method","fromName":"File_ASN1","fromLink":"File_ASN1.html","link":"File_ASN1.html#method__decodeUnixTime","name":"File_ASN1::_decodeUnixTime","doc":"BER-decode the time (using UNIX time)"},
        {"type":"Method","fromName":"File_ASN1","fromLink":"File_ASN1.html","link":"File_ASN1.html#method__decodeDateTime","name":"File_ASN1::_decodeDateTime","doc":"BER-decode the time (using DateTime)"},
        {"type":"Method","fromName":"File_ASN1","fromLink":"File_ASN1.html","link":"File_ASN1.html#method_setTimeFormat","name":"File_ASN1::setTimeFormat","doc":"Set the time format"},
        {"type":"Method","fromName":"File_ASN1","fromLink":"File_ASN1.html","link":"File_ASN1.html#method_loadOIDs","name":"File_ASN1::loadOIDs","doc":"Load OIDs"},
        {"type":"Method","fromName":"File_ASN1","fromLink":"File_ASN1.html","link":"File_ASN1.html#method_loadFilters","name":"File_ASN1::loadFilters","doc":"Load filters"},
        {"type":"Method","fromName":"File_ASN1","fromLink":"File_ASN1.html","link":"File_ASN1.html#method__string_shift","name":"File_ASN1::_string_shift","doc":"String Shift"},
        {"type":"Method","fromName":"File_ASN1","fromLink":"File_ASN1.html","link":"File_ASN1.html#method_convert","name":"File_ASN1::convert","doc":"String type conversion"},
            
                    {"type":"Class","link":"File_ASN1_Element.html","name":"File_ASN1_Element","doc":"ASN.1 Element"},
                                {"type":"Method","fromName":"File_ASN1_Element","fromLink":"File_ASN1_Element.html","link":"File_ASN1_Element.html#method___construct","name":"File_ASN1_Element::__construct","doc":"Constructor"},
        {"type":"Method","fromName":"File_ASN1_Element","fromLink":"File_ASN1_Element.html","link":"File_ASN1_Element.html#method_File_ASN1_Element","name":"File_ASN1_Element::File_ASN1_Element","doc":"PHP4 compatible Default Constructor."},
            
                    {"type":"Class","link":"File_X509.html","name":"File_X509","doc":"Pure-PHP X.509 Parser"},
                                {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method___construct","name":"File_X509::__construct","doc":"Default Constructor."},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method_File_X509","name":"File_X509::File_X509","doc":"PHP4 compatible Default Constructor."},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method_loadX509","name":"File_X509::loadX509","doc":"Load X.509 certificate"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method_saveX509","name":"File_X509::saveX509","doc":"Save X.509 certificate"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method__mapInExtensions","name":"File_X509::_mapInExtensions","doc":"Map extension values from octet string to extension-specific internal\n  format."},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method__mapOutExtensions","name":"File_X509::_mapOutExtensions","doc":"Map extension values from extension-specific internal format to\n  octet string."},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method__mapInAttributes","name":"File_X509::_mapInAttributes","doc":"Map attribute values from ANY type to attribute-specific internal\n  format."},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method__mapOutAttributes","name":"File_X509::_mapOutAttributes","doc":"Map attribute values from attribute-specific internal format to\n  ANY type."},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method__mapInDNs","name":"File_X509::_mapInDNs","doc":"Map DN values from ANY type to DN-specific internal\n  format."},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method__mapOutDNs","name":"File_X509::_mapOutDNs","doc":"Map DN values from DN-specific internal format to\n  ANY type."},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method__getMapping","name":"File_X509::_getMapping","doc":"Associate an extension ID to an extension mapping"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method_loadCA","name":"File_X509::loadCA","doc":"Load an X.509 certificate as a certificate authority"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method_validateURL","name":"File_X509::validateURL","doc":"Validate an X.509 certificate against a URL"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method_validateDate","name":"File_X509::validateDate","doc":"Validate a date"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method__fetchURL","name":"File_X509::_fetchURL","doc":"Fetches a URL"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method__testForIntermediate","name":"File_X509::_testForIntermediate","doc":"Validates an intermediate cert as identified via authority info access extension"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method_validateSignature","name":"File_X509::validateSignature","doc":"Validate a signature"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method__validateSignatureCountable","name":"File_X509::_validateSignatureCountable","doc":"Validate a signature"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method__validateSignature","name":"File_X509::_validateSignature","doc":"Validates a signature"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method_setRecurLimit","name":"File_X509::setRecurLimit","doc":"Sets the recursion limit"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method_disableURLFetch","name":"File_X509::disableURLFetch","doc":"Prevents URIs from being automatically retrieved"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method_enableURLFetch","name":"File_X509::enableURLFetch","doc":"Allows URIs to be automatically retrieved"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method__reformatKey","name":"File_X509::_reformatKey","doc":"Reformat public keys"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method__decodeIP","name":"File_X509::_decodeIP","doc":"Decodes an IP address"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method__decodeNameConstraintIP","name":"File_X509::_decodeNameConstraintIP","doc":"Decodes an IP address in a name constraints extension"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method__encodeIP","name":"File_X509::_encodeIP","doc":"Encodes an IP address"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method__translateDNProp","name":"File_X509::_translateDNProp","doc":"\"Normalizes\" a Distinguished Name property"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method_setDNProp","name":"File_X509::setDNProp","doc":"Set a Distinguished Name property"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method_removeDNProp","name":"File_X509::removeDNProp","doc":"Remove Distinguished Name properties"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method_getDNProp","name":"File_X509::getDNProp","doc":"Get Distinguished Name properties"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method_setDN","name":"File_X509::setDN","doc":"Set a Distinguished Name"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method_getDN","name":"File_X509::getDN","doc":"Get the Distinguished Name for a certificates subject"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method_getIssuerDN","name":"File_X509::getIssuerDN","doc":"Get the Distinguished Name for a certificate/crl issuer"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method_getSubjectDN","name":"File_X509::getSubjectDN","doc":"Get the Distinguished Name for a certificate/csr subject\nAlias of getDN()"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method_getIssuerDNProp","name":"File_X509::getIssuerDNProp","doc":"Get an individual Distinguished Name property for a certificate/crl issuer"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method_getSubjectDNProp","name":"File_X509::getSubjectDNProp","doc":"Get an individual Distinguished Name property for a certificate/csr subject"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method_getChain","name":"File_X509::getChain","doc":"Get the certificate chain for the current cert"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method_setPublicKey","name":"File_X509::setPublicKey","doc":"Set public key"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method_setPrivateKey","name":"File_X509::setPrivateKey","doc":"Set private key"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method_setChallenge","name":"File_X509::setChallenge","doc":"Set challenge"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method_getPublicKey","name":"File_X509::getPublicKey","doc":"Gets the public key"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method_loadCSR","name":"File_X509::loadCSR","doc":"Load a Certificate Signing Request"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method_saveCSR","name":"File_X509::saveCSR","doc":"Save CSR request"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method_loadSPKAC","name":"File_X509::loadSPKAC","doc":"Load a SPKAC CSR"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method_saveSPKAC","name":"File_X509::saveSPKAC","doc":"Save a SPKAC CSR request"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method_loadCRL","name":"File_X509::loadCRL","doc":"Load a Certificate Revocation List"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method_saveCRL","name":"File_X509::saveCRL","doc":"Save Certificate Revocation List."},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method__timeField","name":"File_X509::_timeField","doc":"Helper function to build a time field according to RFC 3280 section\n - 4.1.2.5 Validity\n - 5.1.2.4 This Update\n - 5.1.2.5 Next Update\n - 5.1.2.6 Revoked Certificates\nby choosing utcTime iff year of date given is before 2050 and generalTime else."},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method_sign","name":"File_X509::sign","doc":"Sign an X.509 certificate"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method_signCSR","name":"File_X509::signCSR","doc":"Sign a CSR"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method_signSPKAC","name":"File_X509::signSPKAC","doc":"Sign a SPKAC"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method_signCRL","name":"File_X509::signCRL","doc":"Sign a CRL"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method__sign","name":"File_X509::_sign","doc":"X.509 certificate signing helper function."},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method_setStartDate","name":"File_X509::setStartDate","doc":"Set certificate start date"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method_setEndDate","name":"File_X509::setEndDate","doc":"Set certificate end date"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method_setSerialNumber","name":"File_X509::setSerialNumber","doc":"Set Serial Number"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method_makeCA","name":"File_X509::makeCA","doc":"Turns the certificate into a certificate authority"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method__isSubArrayValid","name":"File_X509::_isSubArrayValid","doc":"Check for validity of subarray"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method__subArrayUnchecked","name":"File_X509::_subArrayUnchecked","doc":"Get a reference to a subarray"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method__subArray","name":"File_X509::_subArray","doc":"Get a reference to a subarray"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method__extensions","name":"File_X509::_extensions","doc":"Get a reference to an extension subarray"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method__removeExtension","name":"File_X509::_removeExtension","doc":"Remove an Extension"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method__getExtension","name":"File_X509::_getExtension","doc":"Get an Extension"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method__getExtensions","name":"File_X509::_getExtensions","doc":"Returns a list of all extensions in use"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method__setExtension","name":"File_X509::_setExtension","doc":"Set an Extension"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method_removeExtension","name":"File_X509::removeExtension","doc":"Remove a certificate, CSR or CRL Extension"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method_getExtension","name":"File_X509::getExtension","doc":"Get a certificate, CSR or CRL Extension"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method_getExtensions","name":"File_X509::getExtensions","doc":"Returns a list of all extensions in use in certificate, CSR or CRL"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method_setExtension","name":"File_X509::setExtension","doc":"Set a certificate, CSR or CRL Extension"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method_removeAttribute","name":"File_X509::removeAttribute","doc":"Remove a CSR attribute."},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method_getAttribute","name":"File_X509::getAttribute","doc":"Get a CSR attribute"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method_getAttributes","name":"File_X509::getAttributes","doc":"Returns a list of all CSR attributes in use"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method_setAttribute","name":"File_X509::setAttribute","doc":"Set a CSR attribute"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method_setKeyIdentifier","name":"File_X509::setKeyIdentifier","doc":"Sets the subject key identifier"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method_computeKeyIdentifier","name":"File_X509::computeKeyIdentifier","doc":"Compute a public key identifier."},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method__formatSubjectPublicKey","name":"File_X509::_formatSubjectPublicKey","doc":"Format a public key as appropriate"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method_setDomain","name":"File_X509::setDomain","doc":"Set the domain name's which the cert is to be valid for"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method_setIPAddress","name":"File_X509::setIPAddress","doc":"Set the IP Addresses's which the cert is to be valid for"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method__dnsName","name":"File_X509::_dnsName","doc":"Helper function to build domain array"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method__iPAddress","name":"File_X509::_iPAddress","doc":"Helper function to build IP Address array"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method__revokedCertificate","name":"File_X509::_revokedCertificate","doc":"Get the index of a revoked certificate."},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method_revoke","name":"File_X509::revoke","doc":"Revoke a certificate."},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method_unrevoke","name":"File_X509::unrevoke","doc":"Unrevoke a certificate."},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method_getRevoked","name":"File_X509::getRevoked","doc":"Get a revoked certificate."},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method_listRevoked","name":"File_X509::listRevoked","doc":"List revoked certificates"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method_removeRevokedCertificateExtension","name":"File_X509::removeRevokedCertificateExtension","doc":"Remove a Revoked Certificate Extension"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method_getRevokedCertificateExtension","name":"File_X509::getRevokedCertificateExtension","doc":"Get a Revoked Certificate Extension"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method_getRevokedCertificateExtensions","name":"File_X509::getRevokedCertificateExtensions","doc":"Returns a list of all extensions in use for a given revoked certificate"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method_setRevokedCertificateExtension","name":"File_X509::setRevokedCertificateExtension","doc":"Set a Revoked Certificate Extension"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method__extractBER","name":"File_X509::_extractBER","doc":"Extract raw BER from Base64 encoding"},
        {"type":"Method","fromName":"File_X509","fromLink":"File_X509.html","link":"File_X509.html#method_getOID","name":"File_X509::getOID","doc":"Returns the OID corresponding to a name"},
            
                    {"type":"Class","link":"Math_BigInteger.html","name":"Math_BigInteger","doc":"Pure-PHP arbitrary precision integer arithmetic library. Supports base-2, base-10, base-16, and base-256\nnumbers."},
                                {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method___construct","name":"Math_BigInteger::__construct","doc":"Converts base-2, base-10, base-16, and binary strings (base-256) to BigIntegers."},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method_Math_BigInteger","name":"Math_BigInteger::Math_BigInteger","doc":"PHP4 compatible Default Constructor."},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method_toBytes","name":"Math_BigInteger::toBytes","doc":"Converts a BigInteger to a byte string (eg. base-256)."},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method_toHex","name":"Math_BigInteger::toHex","doc":"Converts a BigInteger to a hex string (eg. base-16))."},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method_toBits","name":"Math_BigInteger::toBits","doc":"Converts a BigInteger to a bit string (eg. base-2)."},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method_toString","name":"Math_BigInteger::toString","doc":"Converts a BigInteger to a base-10 number."},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method_copy","name":"Math_BigInteger::copy","doc":"Copy an object"},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method___toString","name":"Math_BigInteger::__toString","doc":"__toString() magic method"},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method___clone","name":"Math_BigInteger::__clone","doc":"__clone() magic method"},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method___sleep","name":"Math_BigInteger::__sleep","doc":"__sleep() magic method"},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method___wakeup","name":"Math_BigInteger::__wakeup","doc":"__wakeup() magic method"},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method___debugInfo","name":"Math_BigInteger::__debugInfo","doc":"__debugInfo() magic method"},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method_add","name":"Math_BigInteger::add","doc":"Adds two BigIntegers."},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method__add","name":"Math_BigInteger::_add","doc":"Performs addition."},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method_subtract","name":"Math_BigInteger::subtract","doc":"Subtracts two BigIntegers."},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method__subtract","name":"Math_BigInteger::_subtract","doc":"Performs subtraction."},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method_multiply","name":"Math_BigInteger::multiply","doc":"Multiplies two BigIntegers"},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method__multiply","name":"Math_BigInteger::_multiply","doc":"Performs multiplication."},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method__regularMultiply","name":"Math_BigInteger::_regularMultiply","doc":"Performs long multiplication on two BigIntegers"},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method__karatsuba","name":"Math_BigInteger::_karatsuba","doc":"Performs Karatsuba multiplication on two BigIntegers"},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method__square","name":"Math_BigInteger::_square","doc":"Performs squaring"},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method__baseSquare","name":"Math_BigInteger::_baseSquare","doc":"Performs traditional squaring on two BigIntegers"},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method__karatsubaSquare","name":"Math_BigInteger::_karatsubaSquare","doc":"Performs Karatsuba \"squaring\" on two BigIntegers"},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method_divide","name":"Math_BigInteger::divide","doc":"Divides two BigIntegers."},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method__divide_digit","name":"Math_BigInteger::_divide_digit","doc":"Divides a BigInteger by a regular integer"},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method_modPow","name":"Math_BigInteger::modPow","doc":"Performs modular exponentiation."},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method_powMod","name":"Math_BigInteger::powMod","doc":"Performs modular exponentiation."},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method__slidingWindow","name":"Math_BigInteger::_slidingWindow","doc":"Sliding Window k-ary Modular Exponentiation"},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method__reduce","name":"Math_BigInteger::_reduce","doc":"Modular reduction"},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method__prepareReduce","name":"Math_BigInteger::_prepareReduce","doc":"Modular reduction preperation"},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method__multiplyReduce","name":"Math_BigInteger::_multiplyReduce","doc":"Modular multiply"},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method__squareReduce","name":"Math_BigInteger::_squareReduce","doc":"Modular square"},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method__mod2","name":"Math_BigInteger::_mod2","doc":"Modulos for Powers of Two"},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method__barrett","name":"Math_BigInteger::_barrett","doc":"Barrett Modular Reduction"},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method__regularBarrett","name":"Math_BigInteger::_regularBarrett","doc":"(Regular) Barrett Modular Reduction"},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method__multiplyLower","name":"Math_BigInteger::_multiplyLower","doc":"Performs long multiplication up to $stop digits"},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method__montgomery","name":"Math_BigInteger::_montgomery","doc":"Montgomery Modular Reduction"},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method__montgomeryMultiply","name":"Math_BigInteger::_montgomeryMultiply","doc":"Montgomery Multiply"},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method__prepMontgomery","name":"Math_BigInteger::_prepMontgomery","doc":"Prepare a number for use in Montgomery Modular Reductions"},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method__modInverse67108864","name":"Math_BigInteger::_modInverse67108864","doc":"Modular Inverse of a number mod 2**26 (eg. 67108864)"},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method_modInverse","name":"Math_BigInteger::modInverse","doc":"Calculates modular inverses."},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method_extendedGCD","name":"Math_BigInteger::extendedGCD","doc":"Calculates the greatest common divisor and Bezout's identity."},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method_gcd","name":"Math_BigInteger::gcd","doc":"Calculates the greatest common divisor"},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method_abs","name":"Math_BigInteger::abs","doc":"Absolute value."},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method_compare","name":"Math_BigInteger::compare","doc":"Compares two numbers."},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method__compare","name":"Math_BigInteger::_compare","doc":"Compares two numbers."},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method_equals","name":"Math_BigInteger::equals","doc":"Tests the equality of two numbers."},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method_setPrecision","name":"Math_BigInteger::setPrecision","doc":"Set Precision"},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method_bitwise_and","name":"Math_BigInteger::bitwise_and","doc":"Logical And"},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method_bitwise_or","name":"Math_BigInteger::bitwise_or","doc":"Logical Or"},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method_bitwise_xor","name":"Math_BigInteger::bitwise_xor","doc":"Logical Exclusive-Or"},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method_bitwise_not","name":"Math_BigInteger::bitwise_not","doc":"Logical Not"},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method_bitwise_rightShift","name":"Math_BigInteger::bitwise_rightShift","doc":"Logical Right Shift"},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method_bitwise_leftShift","name":"Math_BigInteger::bitwise_leftShift","doc":"Logical Left Shift"},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method_bitwise_leftRotate","name":"Math_BigInteger::bitwise_leftRotate","doc":"Logical Left Rotate"},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method_bitwise_rightRotate","name":"Math_BigInteger::bitwise_rightRotate","doc":"Logical Right Rotate"},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method_setRandomGenerator","name":"Math_BigInteger::setRandomGenerator","doc":"Set random number generator function"},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method__random_number_helper","name":"Math_BigInteger::_random_number_helper","doc":"Generates a random BigInteger"},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method_random","name":"Math_BigInteger::random","doc":"Generate a random number"},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method_randomPrime","name":"Math_BigInteger::randomPrime","doc":"Generate a random prime number."},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method__make_odd","name":"Math_BigInteger::_make_odd","doc":"Make the current number odd"},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method_isPrime","name":"Math_BigInteger::isPrime","doc":"Checks a numer to see if it's prime"},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method__lshift","name":"Math_BigInteger::_lshift","doc":"Logical Left Shift"},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method__rshift","name":"Math_BigInteger::_rshift","doc":"Logical Right Shift"},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method__normalize","name":"Math_BigInteger::_normalize","doc":"Normalize"},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method__trim","name":"Math_BigInteger::_trim","doc":"Trim"},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method__array_repeat","name":"Math_BigInteger::_array_repeat","doc":"Array Repeat"},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method__base256_lshift","name":"Math_BigInteger::_base256_lshift","doc":"Logical Left Shift"},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method__base256_rshift","name":"Math_BigInteger::_base256_rshift","doc":"Logical Right Shift"},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method__int2bytes","name":"Math_BigInteger::_int2bytes","doc":"Converts 32-bit integers to bytes."},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method__bytes2int","name":"Math_BigInteger::_bytes2int","doc":"Converts bytes to 32-bit integers"},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method__encodeASN1Length","name":"Math_BigInteger::_encodeASN1Length","doc":"DER-encode an integer"},
        {"type":"Method","fromName":"Math_BigInteger","fromLink":"Math_BigInteger.html","link":"Math_BigInteger.html#method__safe_divide","name":"Math_BigInteger::_safe_divide","doc":"Single digit division"},
            
                    {"type":"Class","link":"Net_SCP.html","name":"Net_SCP","doc":"Pure-PHP implementations of SCP."},
                                {"type":"Method","fromName":"Net_SCP","fromLink":"Net_SCP.html","link":"Net_SCP.html#method___construct","name":"Net_SCP::__construct","doc":"Default Constructor."},
        {"type":"Method","fromName":"Net_SCP","fromLink":"Net_SCP.html","link":"Net_SCP.html#method_Net_SCP","name":"Net_SCP::Net_SCP","doc":"PHP4 compatible Default Constructor."},
        {"type":"Method","fromName":"Net_SCP","fromLink":"Net_SCP.html","link":"Net_SCP.html#method_put","name":"Net_SCP::put","doc":"Uploads a file to the SCP server."},
        {"type":"Method","fromName":"Net_SCP","fromLink":"Net_SCP.html","link":"Net_SCP.html#method_get","name":"Net_SCP::get","doc":"Downloads a file from the SCP server."},
        {"type":"Method","fromName":"Net_SCP","fromLink":"Net_SCP.html","link":"Net_SCP.html#method__send","name":"Net_SCP::_send","doc":"Sends a packet to an SSH server"},
        {"type":"Method","fromName":"Net_SCP","fromLink":"Net_SCP.html","link":"Net_SCP.html#method__receive","name":"Net_SCP::_receive","doc":"Receives a packet from an SSH server"},
        {"type":"Method","fromName":"Net_SCP","fromLink":"Net_SCP.html","link":"Net_SCP.html#method__close","name":"Net_SCP::_close","doc":"Closes the connection to an SSH server"},
            
                    {"type":"Class","link":"Net_SFTP.html","name":"Net_SFTP","doc":"Pure-PHP implementations of SFTP."},
                                {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method___construct","name":"Net_SFTP::__construct","doc":"Default Constructor."},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method_Net_SFTP","name":"Net_SFTP::Net_SFTP","doc":"PHP4 compatible Default Constructor."},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method_login","name":"Net_SFTP::login","doc":"Login"},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method_disableStatCache","name":"Net_SFTP::disableStatCache","doc":"Disable the stat cache"},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method_enableStatCache","name":"Net_SFTP::enableStatCache","doc":"Enable the stat cache"},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method_clearStatCache","name":"Net_SFTP::clearStatCache","doc":"Clear the stat cache"},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method_enablePathCanonicalization","name":"Net_SFTP::enablePathCanonicalization","doc":"Enable path canonicalization"},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method_disablePathCanonicalization","name":"Net_SFTP::disablePathCanonicalization","doc":"Enable path canonicalization"},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method_pwd","name":"Net_SFTP::pwd","doc":"Returns the current directory name"},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method__logError","name":"Net_SFTP::_logError","doc":"Logs errors"},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method_realpath","name":"Net_SFTP::realpath","doc":"Returns canonicalized absolute pathname"},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method__realpath","name":"Net_SFTP::_realpath","doc":"Canonicalize the Server-Side Path Name"},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method_chdir","name":"Net_SFTP::chdir","doc":"Changes the current directory"},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method_nlist","name":"Net_SFTP::nlist","doc":"Returns a list of files in the given directory"},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method__nlist_helper","name":"Net_SFTP::_nlist_helper","doc":"Helper method for nlist"},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method_rawlist","name":"Net_SFTP::rawlist","doc":"Returns a detailed list of files in the given directory"},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method__list","name":"Net_SFTP::_list","doc":"Reads a list, be it detailed or not, of files in the given directory"},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method__comparator","name":"Net_SFTP::_comparator","doc":"Compares two rawlist entries using parameters set by setListOrder()"},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method_setListOrder","name":"Net_SFTP::setListOrder","doc":"Defines how nlist() and rawlist() will be sorted - if at all."},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method_size","name":"Net_SFTP::size","doc":"Returns the file size, in bytes, or false, on failure"},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method__update_stat_cache","name":"Net_SFTP::_update_stat_cache","doc":"Save files / directories to cache"},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method__remove_from_stat_cache","name":"Net_SFTP::_remove_from_stat_cache","doc":"Remove files / directories from cache"},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method__query_stat_cache","name":"Net_SFTP::_query_stat_cache","doc":"Checks cache for path"},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method_stat","name":"Net_SFTP::stat","doc":"Returns general information about a file."},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method_lstat","name":"Net_SFTP::lstat","doc":"Returns general information about a file or symbolic link."},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method__stat","name":"Net_SFTP::_stat","doc":"Returns general information about a file or symbolic link"},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method_truncate","name":"Net_SFTP::truncate","doc":"Truncates a file to a given length"},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method_touch","name":"Net_SFTP::touch","doc":"Sets access and modification time of file."},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method_chown","name":"Net_SFTP::chown","doc":"Changes file or directory owner"},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method_chgrp","name":"Net_SFTP::chgrp","doc":"Changes file or directory group"},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method_chmod","name":"Net_SFTP::chmod","doc":"Set permissions on a file."},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method__setstat","name":"Net_SFTP::_setstat","doc":"Sets information about a file"},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method__setstat_recursive","name":"Net_SFTP::_setstat_recursive","doc":"Recursively sets information on directories on the SFTP server"},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method_readlink","name":"Net_SFTP::readlink","doc":"Return the target of a symbolic link"},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method_symlink","name":"Net_SFTP::symlink","doc":"Create a symlink"},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method_mkdir","name":"Net_SFTP::mkdir","doc":"Creates a directory."},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method__mkdir_helper","name":"Net_SFTP::_mkdir_helper","doc":"Helper function for directory creation"},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method_rmdir","name":"Net_SFTP::rmdir","doc":"Removes a directory."},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method_put","name":"Net_SFTP::put","doc":"Uploads a file to the SFTP server."},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method__read_put_responses","name":"Net_SFTP::_read_put_responses","doc":"Reads multiple successive SSH_FXP_WRITE responses"},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method__close_handle","name":"Net_SFTP::_close_handle","doc":"Close handle"},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method_get","name":"Net_SFTP::get","doc":"Downloads a file from the SFTP server."},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method_delete","name":"Net_SFTP::delete","doc":"Deletes a file on the SFTP server."},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method__delete_recursive","name":"Net_SFTP::_delete_recursive","doc":"Recursively deletes directories on the SFTP server"},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method_file_exists","name":"Net_SFTP::file_exists","doc":"Checks whether a file or directory exists"},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method_is_dir","name":"Net_SFTP::is_dir","doc":"Tells whether the filename is a directory"},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method_is_file","name":"Net_SFTP::is_file","doc":"Tells whether the filename is a regular file"},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method_is_link","name":"Net_SFTP::is_link","doc":"Tells whether the filename is a symbolic link"},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method_is_readable","name":"Net_SFTP::is_readable","doc":"Tells whether a file exists and is readable"},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method_is_writable","name":"Net_SFTP::is_writable","doc":"Tells whether the filename is writable"},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method_is_writeable","name":"Net_SFTP::is_writeable","doc":"Tells whether the filename is writeable"},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method_fileatime","name":"Net_SFTP::fileatime","doc":"Gets last access time of file"},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method_filemtime","name":"Net_SFTP::filemtime","doc":"Gets file modification time"},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method_fileperms","name":"Net_SFTP::fileperms","doc":"Gets file permissions"},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method_fileowner","name":"Net_SFTP::fileowner","doc":"Gets file owner"},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method_filegroup","name":"Net_SFTP::filegroup","doc":"Gets file group"},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method_filesize","name":"Net_SFTP::filesize","doc":"Gets file size"},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method_filetype","name":"Net_SFTP::filetype","doc":"Gets file type"},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method__get_stat_cache_prop","name":"Net_SFTP::_get_stat_cache_prop","doc":"Return a stat properity"},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method__get_lstat_cache_prop","name":"Net_SFTP::_get_lstat_cache_prop","doc":"Return an lstat properity"},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method__get_xstat_cache_prop","name":"Net_SFTP::_get_xstat_cache_prop","doc":"Return a stat or lstat properity"},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method_rename","name":"Net_SFTP::rename","doc":"Renames a file or a directory on the SFTP server"},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method__parseAttributes","name":"Net_SFTP::_parseAttributes","doc":"Parse Attributes"},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method__parseMode","name":"Net_SFTP::_parseMode","doc":"Attempt to identify the file type"},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method__parseLongname","name":"Net_SFTP::_parseLongname","doc":"Parse Longname"},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method__send_sftp_packet","name":"Net_SFTP::_send_sftp_packet","doc":"Sends SFTP Packets"},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method__reset_connection","name":"Net_SFTP::_reset_connection","doc":"Resets a connection for re-use"},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method__get_sftp_packet","name":"Net_SFTP::_get_sftp_packet","doc":"Receives SFTP Packets"},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method_getSFTPLog","name":"Net_SFTP::getSFTPLog","doc":"Returns a log of the packets that have been sent and received."},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method_getSFTPErrors","name":"Net_SFTP::getSFTPErrors","doc":"Returns all errors"},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method_getLastSFTPError","name":"Net_SFTP::getLastSFTPError","doc":"Returns the last error"},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method_getSupportedVersions","name":"Net_SFTP::getSupportedVersions","doc":"Get supported SFTP versions"},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method__disconnect","name":"Net_SFTP::_disconnect","doc":"Disconnect"},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method_enableDatePreservation","name":"Net_SFTP::enableDatePreservation","doc":"Enable Date Preservation"},
        {"type":"Method","fromName":"Net_SFTP","fromLink":"Net_SFTP.html","link":"Net_SFTP.html#method_disableDatePreservation","name":"Net_SFTP::disableDatePreservation","doc":"Disable Date Preservation"},
            
                    {"type":"Class","link":"Net_SFTP_Stream.html","name":"Net_SFTP_Stream","doc":"SFTP Stream Wrapper"},
                                {"type":"Method","fromName":"Net_SFTP_Stream","fromLink":"Net_SFTP_Stream.html","link":"Net_SFTP_Stream.html#method_register","name":"Net_SFTP_Stream::register","doc":"Registers this class as a URL wrapper."},
        {"type":"Method","fromName":"Net_SFTP_Stream","fromLink":"Net_SFTP_Stream.html","link":"Net_SFTP_Stream.html#method___construct","name":"Net_SFTP_Stream::__construct","doc":"The Constructor"},
        {"type":"Method","fromName":"Net_SFTP_Stream","fromLink":"Net_SFTP_Stream.html","link":"Net_SFTP_Stream.html#method__parse_path","name":"Net_SFTP_Stream::_parse_path","doc":"Path Parser"},
        {"type":"Method","fromName":"Net_SFTP_Stream","fromLink":"Net_SFTP_Stream.html","link":"Net_SFTP_Stream.html#method__stream_open","name":"Net_SFTP_Stream::_stream_open","doc":"Opens file or URL"},
        {"type":"Method","fromName":"Net_SFTP_Stream","fromLink":"Net_SFTP_Stream.html","link":"Net_SFTP_Stream.html#method__stream_read","name":"Net_SFTP_Stream::_stream_read","doc":"Read from stream"},
        {"type":"Method","fromName":"Net_SFTP_Stream","fromLink":"Net_SFTP_Stream.html","link":"Net_SFTP_Stream.html#method__stream_write","name":"Net_SFTP_Stream::_stream_write","doc":"Write to stream"},
        {"type":"Method","fromName":"Net_SFTP_Stream","fromLink":"Net_SFTP_Stream.html","link":"Net_SFTP_Stream.html#method__stream_tell","name":"Net_SFTP_Stream::_stream_tell","doc":"Retrieve the current position of a stream"},
        {"type":"Method","fromName":"Net_SFTP_Stream","fromLink":"Net_SFTP_Stream.html","link":"Net_SFTP_Stream.html#method__stream_eof","name":"Net_SFTP_Stream::_stream_eof","doc":"Tests for end-of-file on a file pointer"},
        {"type":"Method","fromName":"Net_SFTP_Stream","fromLink":"Net_SFTP_Stream.html","link":"Net_SFTP_Stream.html#method__stream_seek","name":"Net_SFTP_Stream::_stream_seek","doc":"Seeks to specific location in a stream"},
        {"type":"Method","fromName":"Net_SFTP_Stream","fromLink":"Net_SFTP_Stream.html","link":"Net_SFTP_Stream.html#method__stream_metadata","name":"Net_SFTP_Stream::_stream_metadata","doc":"Change stream options"},
        {"type":"Method","fromName":"Net_SFTP_Stream","fromLink":"Net_SFTP_Stream.html","link":"Net_SFTP_Stream.html#method__stream_cast","name":"Net_SFTP_Stream::_stream_cast","doc":"Retrieve the underlaying resource"},
        {"type":"Method","fromName":"Net_SFTP_Stream","fromLink":"Net_SFTP_Stream.html","link":"Net_SFTP_Stream.html#method__stream_lock","name":"Net_SFTP_Stream::_stream_lock","doc":"Advisory file locking"},
        {"type":"Method","fromName":"Net_SFTP_Stream","fromLink":"Net_SFTP_Stream.html","link":"Net_SFTP_Stream.html#method__rename","name":"Net_SFTP_Stream::_rename","doc":"Renames a file or directory"},
        {"type":"Method","fromName":"Net_SFTP_Stream","fromLink":"Net_SFTP_Stream.html","link":"Net_SFTP_Stream.html#method__dir_opendir","name":"Net_SFTP_Stream::_dir_opendir","doc":"Open directory handle"},
        {"type":"Method","fromName":"Net_SFTP_Stream","fromLink":"Net_SFTP_Stream.html","link":"Net_SFTP_Stream.html#method__dir_readdir","name":"Net_SFTP_Stream::_dir_readdir","doc":"Read entry from directory handle"},
        {"type":"Method","fromName":"Net_SFTP_Stream","fromLink":"Net_SFTP_Stream.html","link":"Net_SFTP_Stream.html#method__dir_rewinddir","name":"Net_SFTP_Stream::_dir_rewinddir","doc":"Rewind directory handle"},
        {"type":"Method","fromName":"Net_SFTP_Stream","fromLink":"Net_SFTP_Stream.html","link":"Net_SFTP_Stream.html#method__dir_closedir","name":"Net_SFTP_Stream::_dir_closedir","doc":"Close directory handle"},
        {"type":"Method","fromName":"Net_SFTP_Stream","fromLink":"Net_SFTP_Stream.html","link":"Net_SFTP_Stream.html#method__mkdir","name":"Net_SFTP_Stream::_mkdir","doc":"Create a directory"},
        {"type":"Method","fromName":"Net_SFTP_Stream","fromLink":"Net_SFTP_Stream.html","link":"Net_SFTP_Stream.html#method__rmdir","name":"Net_SFTP_Stream::_rmdir","doc":"Removes a directory"},
        {"type":"Method","fromName":"Net_SFTP_Stream","fromLink":"Net_SFTP_Stream.html","link":"Net_SFTP_Stream.html#method__stream_flush","name":"Net_SFTP_Stream::_stream_flush","doc":"Flushes the output"},
        {"type":"Method","fromName":"Net_SFTP_Stream","fromLink":"Net_SFTP_Stream.html","link":"Net_SFTP_Stream.html#method__stream_stat","name":"Net_SFTP_Stream::_stream_stat","doc":"Retrieve information about a file resource"},
        {"type":"Method","fromName":"Net_SFTP_Stream","fromLink":"Net_SFTP_Stream.html","link":"Net_SFTP_Stream.html#method__unlink","name":"Net_SFTP_Stream::_unlink","doc":"Delete a file"},
        {"type":"Method","fromName":"Net_SFTP_Stream","fromLink":"Net_SFTP_Stream.html","link":"Net_SFTP_Stream.html#method__url_stat","name":"Net_SFTP_Stream::_url_stat","doc":"Retrieve information about a file"},
        {"type":"Method","fromName":"Net_SFTP_Stream","fromLink":"Net_SFTP_Stream.html","link":"Net_SFTP_Stream.html#method__stream_truncate","name":"Net_SFTP_Stream::_stream_truncate","doc":"Truncate stream"},
        {"type":"Method","fromName":"Net_SFTP_Stream","fromLink":"Net_SFTP_Stream.html","link":"Net_SFTP_Stream.html#method__stream_set_option","name":"Net_SFTP_Stream::_stream_set_option","doc":"Change stream options"},
        {"type":"Method","fromName":"Net_SFTP_Stream","fromLink":"Net_SFTP_Stream.html","link":"Net_SFTP_Stream.html#method__stream_close","name":"Net_SFTP_Stream::_stream_close","doc":"Close an resource"},
        {"type":"Method","fromName":"Net_SFTP_Stream","fromLink":"Net_SFTP_Stream.html","link":"Net_SFTP_Stream.html#method___call","name":"Net_SFTP_Stream::__call","doc":"__call Magic Method"},
            
                    {"type":"Class","link":"Net_SSH1.html","name":"Net_SSH1","doc":"Pure-PHP implementation of SSHv1."},
                                {"type":"Method","fromName":"Net_SSH1","fromLink":"Net_SSH1.html","link":"Net_SSH1.html#method___construct","name":"Net_SSH1::__construct","doc":"Default Constructor."},
        {"type":"Method","fromName":"Net_SSH1","fromLink":"Net_SSH1.html","link":"Net_SSH1.html#method_Net_SSH1","name":"Net_SSH1::Net_SSH1","doc":"PHP4 compatible Default Constructor."},
        {"type":"Method","fromName":"Net_SSH1","fromLink":"Net_SSH1.html","link":"Net_SSH1.html#method__connect","name":"Net_SSH1::_connect","doc":"Connect to an SSHv1 server"},
        {"type":"Method","fromName":"Net_SSH1","fromLink":"Net_SSH1.html","link":"Net_SSH1.html#method_login","name":"Net_SSH1::login","doc":"Login"},
        {"type":"Method","fromName":"Net_SSH1","fromLink":"Net_SSH1.html","link":"Net_SSH1.html#method_setTimeout","name":"Net_SSH1::setTimeout","doc":"Set Timeout"},
        {"type":"Method","fromName":"Net_SSH1","fromLink":"Net_SSH1.html","link":"Net_SSH1.html#method_exec","name":"Net_SSH1::exec","doc":"Executes a command on a non-interactive shell, returns the output, and quits."},
        {"type":"Method","fromName":"Net_SSH1","fromLink":"Net_SSH1.html","link":"Net_SSH1.html#method__initShell","name":"Net_SSH1::_initShell","doc":"Creates an interactive shell"},
        {"type":"Method","fromName":"Net_SSH1","fromLink":"Net_SSH1.html","link":"Net_SSH1.html#method_write","name":"Net_SSH1::write","doc":"Inputs a command into an interactive shell."},
        {"type":"Method","fromName":"Net_SSH1","fromLink":"Net_SSH1.html","link":"Net_SSH1.html#method_read","name":"Net_SSH1::read","doc":"Returns the output of an interactive shell when there's a match for $expect"},
        {"type":"Method","fromName":"Net_SSH1","fromLink":"Net_SSH1.html","link":"Net_SSH1.html#method_interactiveWrite","name":"Net_SSH1::interactiveWrite","doc":"Inputs a command into an interactive shell."},
        {"type":"Method","fromName":"Net_SSH1","fromLink":"Net_SSH1.html","link":"Net_SSH1.html#method_interactiveRead","name":"Net_SSH1::interactiveRead","doc":"Returns the output of an interactive shell when no more output is available."},
        {"type":"Method","fromName":"Net_SSH1","fromLink":"Net_SSH1.html","link":"Net_SSH1.html#method_disconnect","name":"Net_SSH1::disconnect","doc":"Disconnect"},
        {"type":"Method","fromName":"Net_SSH1","fromLink":"Net_SSH1.html","link":"Net_SSH1.html#method___destruct","name":"Net_SSH1::__destruct","doc":"Destructor."},
        {"type":"Method","fromName":"Net_SSH1","fromLink":"Net_SSH1.html","link":"Net_SSH1.html#method__disconnect","name":"Net_SSH1::_disconnect","doc":"Disconnect"},
        {"type":"Method","fromName":"Net_SSH1","fromLink":"Net_SSH1.html","link":"Net_SSH1.html#method__get_binary_packet","name":"Net_SSH1::_get_binary_packet","doc":"Gets Binary Packets"},
        {"type":"Method","fromName":"Net_SSH1","fromLink":"Net_SSH1.html","link":"Net_SSH1.html#method__send_binary_packet","name":"Net_SSH1::_send_binary_packet","doc":"Sends Binary Packets"},
        {"type":"Method","fromName":"Net_SSH1","fromLink":"Net_SSH1.html","link":"Net_SSH1.html#method__crc","name":"Net_SSH1::_crc","doc":"Cyclic Redundancy Check (CRC)"},
        {"type":"Method","fromName":"Net_SSH1","fromLink":"Net_SSH1.html","link":"Net_SSH1.html#method__string_shift","name":"Net_SSH1::_string_shift","doc":"String Shift"},
        {"type":"Method","fromName":"Net_SSH1","fromLink":"Net_SSH1.html","link":"Net_SSH1.html#method__rsa_crypt","name":"Net_SSH1::_rsa_crypt","doc":"RSA Encrypt"},
        {"type":"Method","fromName":"Net_SSH1","fromLink":"Net_SSH1.html","link":"Net_SSH1.html#method__define_array","name":"Net_SSH1::_define_array","doc":"Define Array"},
        {"type":"Method","fromName":"Net_SSH1","fromLink":"Net_SSH1.html","link":"Net_SSH1.html#method_getLog","name":"Net_SSH1::getLog","doc":"Returns a log of the packets that have been sent and received."},
        {"type":"Method","fromName":"Net_SSH1","fromLink":"Net_SSH1.html","link":"Net_SSH1.html#method__format_log","name":"Net_SSH1::_format_log","doc":"Formats a log for printing"},
        {"type":"Method","fromName":"Net_SSH1","fromLink":"Net_SSH1.html","link":"Net_SSH1.html#method__format_log_helper","name":"Net_SSH1::_format_log_helper","doc":"Helper function for _format_log"},
        {"type":"Method","fromName":"Net_SSH1","fromLink":"Net_SSH1.html","link":"Net_SSH1.html#method_getServerKeyPublicExponent","name":"Net_SSH1::getServerKeyPublicExponent","doc":"Return the server key public exponent"},
        {"type":"Method","fromName":"Net_SSH1","fromLink":"Net_SSH1.html","link":"Net_SSH1.html#method_getServerKeyPublicModulus","name":"Net_SSH1::getServerKeyPublicModulus","doc":"Return the server key public modulus"},
        {"type":"Method","fromName":"Net_SSH1","fromLink":"Net_SSH1.html","link":"Net_SSH1.html#method_getHostKeyPublicExponent","name":"Net_SSH1::getHostKeyPublicExponent","doc":"Return the host key public exponent"},
        {"type":"Method","fromName":"Net_SSH1","fromLink":"Net_SSH1.html","link":"Net_SSH1.html#method_getHostKeyPublicModulus","name":"Net_SSH1::getHostKeyPublicModulus","doc":"Return the host key public modulus"},
        {"type":"Method","fromName":"Net_SSH1","fromLink":"Net_SSH1.html","link":"Net_SSH1.html#method_getSupportedCiphers","name":"Net_SSH1::getSupportedCiphers","doc":"Return a list of ciphers supported by SSH1 server."},
        {"type":"Method","fromName":"Net_SSH1","fromLink":"Net_SSH1.html","link":"Net_SSH1.html#method_getSupportedAuthentications","name":"Net_SSH1::getSupportedAuthentications","doc":"Return a list of authentications supported by SSH1 server."},
        {"type":"Method","fromName":"Net_SSH1","fromLink":"Net_SSH1.html","link":"Net_SSH1.html#method_getServerIdentification","name":"Net_SSH1::getServerIdentification","doc":"Return the server identification."},
        {"type":"Method","fromName":"Net_SSH1","fromLink":"Net_SSH1.html","link":"Net_SSH1.html#method__append_log","name":"Net_SSH1::_append_log","doc":"Logs data packets"},
            
                    {"type":"Class","link":"Net_SSH2.html","name":"Net_SSH2","doc":"Pure-PHP implementation of SSHv2."},
                                {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method___construct","name":"Net_SSH2::__construct","doc":"Default Constructor."},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method_Net_SSH2","name":"Net_SSH2::Net_SSH2","doc":"PHP4 compatible Default Constructor."},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method_setCryptoEngine","name":"Net_SSH2::setCryptoEngine","doc":"Set Crypto Engine Mode"},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method_sendIdentificationStringFirst","name":"Net_SSH2::sendIdentificationStringFirst","doc":"Send Identification String First"},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method_sendIdentificationStringLast","name":"Net_SSH2::sendIdentificationStringLast","doc":"Send Identification String Last"},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method_sendKEXINITFirst","name":"Net_SSH2::sendKEXINITFirst","doc":"Send SSH_MSG_KEXINIT First"},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method_sendKEXINITLast","name":"Net_SSH2::sendKEXINITLast","doc":"Send SSH_MSG_KEXINIT Last"},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method__connect","name":"Net_SSH2::_connect","doc":"Connect to an SSHv2 server"},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method__generate_identifier","name":"Net_SSH2::_generate_identifier","doc":"Generates the SSH identifier"},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method__key_exchange","name":"Net_SSH2::_key_exchange","doc":"Key Exchange"},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method__encryption_algorithm_to_key_size","name":"Net_SSH2::_encryption_algorithm_to_key_size","doc":"Maps an encryption algorithm name to the number of key bytes."},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method__encryption_algorithm_to_crypt_instance","name":"Net_SSH2::_encryption_algorithm_to_crypt_instance","doc":"Maps an encryption algorithm name to an instance of a subclass of\n\\phpseclib\\Crypt\\Base."},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method__bad_algorithm_candidate","name":"Net_SSH2::_bad_algorithm_candidate","doc":"Tests whether or not proposed algorithm has a potential for issues"},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method_login","name":"Net_SSH2::login","doc":"Login"},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method__login","name":"Net_SSH2::_login","doc":"Login Helper"},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method__login_helper","name":"Net_SSH2::_login_helper","doc":"Login Helper"},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method__keyboard_interactive_login","name":"Net_SSH2::_keyboard_interactive_login","doc":"Login via keyboard-interactive authentication"},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method__keyboard_interactive_process","name":"Net_SSH2::_keyboard_interactive_process","doc":"Handle the keyboard-interactive requests / responses."},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method__ssh_agent_login","name":"Net_SSH2::_ssh_agent_login","doc":"Login with an ssh-agent provided key"},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method__privatekey_login","name":"Net_SSH2::_privatekey_login","doc":"Login with an RSA private key"},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method_setTimeout","name":"Net_SSH2::setTimeout","doc":"Set Timeout"},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method_getStdError","name":"Net_SSH2::getStdError","doc":"Get the output from stdError"},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method_exec","name":"Net_SSH2::exec","doc":"Execute Command"},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method__initShell","name":"Net_SSH2::_initShell","doc":"Creates an interactive shell"},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method__get_interactive_channel","name":"Net_SSH2::_get_interactive_channel","doc":"Return the channel to be used with read() / write()"},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method__get_open_channel","name":"Net_SSH2::_get_open_channel","doc":"Return an available open channel"},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method_read","name":"Net_SSH2::read","doc":"Returns the output of an interactive shell"},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method_write","name":"Net_SSH2::write","doc":"Inputs a command into an interactive shell."},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method_startSubsystem","name":"Net_SSH2::startSubsystem","doc":"Start a subsystem."},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method_stopSubsystem","name":"Net_SSH2::stopSubsystem","doc":"Stops a subsystem."},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method_reset","name":"Net_SSH2::reset","doc":"Closes a channel"},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method_isTimeout","name":"Net_SSH2::isTimeout","doc":"Is timeout?"},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method_disconnect","name":"Net_SSH2::disconnect","doc":"Disconnect"},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method___destruct","name":"Net_SSH2::__destruct","doc":"Destructor."},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method_isConnected","name":"Net_SSH2::isConnected","doc":"Is the connection still active?"},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method_isAuthenticated","name":"Net_SSH2::isAuthenticated","doc":"Have you successfully been logged in?"},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method_ping","name":"Net_SSH2::ping","doc":"Pings a server connection, or tries to reconnect if the connection has gone down"},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method__reconnect","name":"Net_SSH2::_reconnect","doc":"In situ reconnect method"},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method__reset_connection","name":"Net_SSH2::_reset_connection","doc":"Resets a connection for re-use"},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method__get_binary_packet","name":"Net_SSH2::_get_binary_packet","doc":"Gets Binary Packets"},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method__filter","name":"Net_SSH2::_filter","doc":"Filter Binary Packets"},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method_enableQuietMode","name":"Net_SSH2::enableQuietMode","doc":"Enable Quiet Mode"},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method_disableQuietMode","name":"Net_SSH2::disableQuietMode","doc":"Disable Quiet Mode"},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method_isQuietModeEnabled","name":"Net_SSH2::isQuietModeEnabled","doc":"Returns whether Quiet Mode is enabled or not"},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method_enablePTY","name":"Net_SSH2::enablePTY","doc":"Enable request-pty when using exec()"},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method_disablePTY","name":"Net_SSH2::disablePTY","doc":"Disable request-pty when using exec()"},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method_isPTYEnabled","name":"Net_SSH2::isPTYEnabled","doc":"Returns whether request-pty is enabled or not"},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method__get_channel_packet","name":"Net_SSH2::_get_channel_packet","doc":"Gets channel data"},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method__send_binary_packet","name":"Net_SSH2::_send_binary_packet","doc":"Sends Binary Packets"},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method__append_log","name":"Net_SSH2::_append_log","doc":"Logs data packets"},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method__send_channel_packet","name":"Net_SSH2::_send_channel_packet","doc":"Sends channel data"},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method__close_channel","name":"Net_SSH2::_close_channel","doc":"Closes and flushes a channel"},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method__disconnect","name":"Net_SSH2::_disconnect","doc":"Disconnect"},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method__string_shift","name":"Net_SSH2::_string_shift","doc":"String Shift"},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method__define_array","name":"Net_SSH2::_define_array","doc":"Define Array"},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method_getLog","name":"Net_SSH2::getLog","doc":"Returns a log of the packets that have been sent and received."},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method__format_log","name":"Net_SSH2::_format_log","doc":"Formats a log for printing"},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method__format_log_helper","name":"Net_SSH2::_format_log_helper","doc":"Helper function for _format_log"},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method__on_channel_open","name":"Net_SSH2::_on_channel_open","doc":"Helper function for agent->_on_channel_open()"},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method__array_intersect_first","name":"Net_SSH2::_array_intersect_first","doc":"Returns the first value of the intersection of two arrays or false if\nthe intersection is empty. The order is defined by the first parameter."},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method_getErrors","name":"Net_SSH2::getErrors","doc":"Returns all errors"},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method_getLastError","name":"Net_SSH2::getLastError","doc":"Returns the last error"},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method_getServerIdentification","name":"Net_SSH2::getServerIdentification","doc":"Return the server identification."},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method_getKexAlgorithms","name":"Net_SSH2::getKexAlgorithms","doc":"Return a list of the key exchange algorithms the server supports."},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method_getServerHostKeyAlgorithms","name":"Net_SSH2::getServerHostKeyAlgorithms","doc":"Return a list of the host key (public key) algorithms the server supports."},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method_getEncryptionAlgorithmsClient2Server","name":"Net_SSH2::getEncryptionAlgorithmsClient2Server","doc":"Return a list of the (symmetric key) encryption algorithms the server supports, when receiving stuff from the client."},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method_getEncryptionAlgorithmsServer2Client","name":"Net_SSH2::getEncryptionAlgorithmsServer2Client","doc":"Return a list of the (symmetric key) encryption algorithms the server supports, when sending stuff to the client."},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method_getMACAlgorithmsClient2Server","name":"Net_SSH2::getMACAlgorithmsClient2Server","doc":"Return a list of the MAC algorithms the server supports, when receiving stuff from the client."},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method_getMACAlgorithmsServer2Client","name":"Net_SSH2::getMACAlgorithmsServer2Client","doc":"Return a list of the MAC algorithms the server supports, when sending stuff to the client."},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method_getCompressionAlgorithmsClient2Server","name":"Net_SSH2::getCompressionAlgorithmsClient2Server","doc":"Return a list of the compression algorithms the server supports, when receiving stuff from the client."},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method_getCompressionAlgorithmsServer2Client","name":"Net_SSH2::getCompressionAlgorithmsServer2Client","doc":"Return a list of the compression algorithms the server supports, when sending stuff to the client."},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method_getLanguagesServer2Client","name":"Net_SSH2::getLanguagesServer2Client","doc":"Return a list of the languages the server supports, when sending stuff to the client."},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method_getLanguagesClient2Server","name":"Net_SSH2::getLanguagesClient2Server","doc":"Return a list of the languages the server supports, when receiving stuff from the client."},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method_getServerAlgorithms","name":"Net_SSH2::getServerAlgorithms","doc":"Returns a list of algorithms the server supports"},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method_getSupportedKEXAlgorithms","name":"Net_SSH2::getSupportedKEXAlgorithms","doc":"Returns a list of KEX algorithms that phpseclib supports"},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method_getSupportedHostKeyAlgorithms","name":"Net_SSH2::getSupportedHostKeyAlgorithms","doc":"Returns a list of host key algorithms that phpseclib supports"},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method_getSupportedEncryptionAlgorithms","name":"Net_SSH2::getSupportedEncryptionAlgorithms","doc":"Returns a list of symmetric key algorithms that phpseclib supports"},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method_getSupportedMACAlgorithms","name":"Net_SSH2::getSupportedMACAlgorithms","doc":"Returns a list of MAC algorithms that phpseclib supports"},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method_getSupportedCompressionAlgorithms","name":"Net_SSH2::getSupportedCompressionAlgorithms","doc":"Returns a list of compression algorithms that phpseclib supports"},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method_getAlgorithmsNegotiated","name":"Net_SSH2::getAlgorithmsNegotiated","doc":"Return list of negotiated algorithms"},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method_setPreferredAlgorithms","name":"Net_SSH2::setPreferredAlgorithms","doc":"Accepts an associative array with up to four parameters as described at\n<a href=\"https://www.php.net/manual/en/function.ssh2-connect.php\">https://www.php.net/manual/en/function.ssh2-connect.php</a>"},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method_getBannerMessage","name":"Net_SSH2::getBannerMessage","doc":"Returns the banner message."},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method_getServerPublicHostKey","name":"Net_SSH2::getServerPublicHostKey","doc":"Returns the server public host key."},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method_getExitStatus","name":"Net_SSH2::getExitStatus","doc":"Returns the exit status of an SSH command or false."},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method_getWindowColumns","name":"Net_SSH2::getWindowColumns","doc":"Returns the number of columns for the terminal window size."},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method_getWindowRows","name":"Net_SSH2::getWindowRows","doc":"Returns the number of rows for the terminal window size."},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method_setWindowColumns","name":"Net_SSH2::setWindowColumns","doc":"Sets the number of columns for the terminal window size."},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method_setWindowRows","name":"Net_SSH2::setWindowRows","doc":"Sets the number of rows for the terminal window size."},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method_setWindowSize","name":"Net_SSH2::setWindowSize","doc":"Sets the number of columns and rows for the terminal window size."},
        {"type":"Method","fromName":"Net_SSH2","fromLink":"Net_SSH2.html","link":"Net_SSH2.html#method__updateLogHistory","name":"Net_SSH2::_updateLogHistory","doc":"Update packet types in log history"},
            
                    {"type":"Class","link":"System_SSH_Agent.html","name":"System_SSH_Agent","doc":"Pure-PHP ssh-agent client identity factory"},
                                {"type":"Method","fromName":"System_SSH_Agent","fromLink":"System_SSH_Agent.html","link":"System_SSH_Agent.html#method___construct","name":"System_SSH_Agent::__construct","doc":"Default Constructor"},
        {"type":"Method","fromName":"System_SSH_Agent","fromLink":"System_SSH_Agent.html","link":"System_SSH_Agent.html#method_System_SSH_Agent","name":"System_SSH_Agent::System_SSH_Agent","doc":"PHP4 compatible Default Constructor."},
        {"type":"Method","fromName":"System_SSH_Agent","fromLink":"System_SSH_Agent.html","link":"System_SSH_Agent.html#method_requestIdentities","name":"System_SSH_Agent::requestIdentities","doc":"Request Identities"},
        {"type":"Method","fromName":"System_SSH_Agent","fromLink":"System_SSH_Agent.html","link":"System_SSH_Agent.html#method_startSSHForwarding","name":"System_SSH_Agent::startSSHForwarding","doc":"Signal that agent forwarding should\nbe requested when a channel is opened"},
        {"type":"Method","fromName":"System_SSH_Agent","fromLink":"System_SSH_Agent.html","link":"System_SSH_Agent.html#method__request_forwarding","name":"System_SSH_Agent::_request_forwarding","doc":"Request agent forwarding of remote server"},
        {"type":"Method","fromName":"System_SSH_Agent","fromLink":"System_SSH_Agent.html","link":"System_SSH_Agent.html#method__on_channel_open","name":"System_SSH_Agent::_on_channel_open","doc":"On successful channel open"},
        {"type":"Method","fromName":"System_SSH_Agent","fromLink":"System_SSH_Agent.html","link":"System_SSH_Agent.html#method__forward_data","name":"System_SSH_Agent::_forward_data","doc":"Forward data to SSH Agent and return data reply"},
            
                    {"type":"Class","link":"System_SSH_Agent_Identity.html","name":"System_SSH_Agent_Identity","doc":"Pure-PHP ssh-agent client identity object"},
                                {"type":"Method","fromName":"System_SSH_Agent_Identity","fromLink":"System_SSH_Agent_Identity.html","link":"System_SSH_Agent_Identity.html#method___construct","name":"System_SSH_Agent_Identity::__construct","doc":"Default Constructor."},
        {"type":"Method","fromName":"System_SSH_Agent_Identity","fromLink":"System_SSH_Agent_Identity.html","link":"System_SSH_Agent_Identity.html#method_System_SSH_Agent_Identity","name":"System_SSH_Agent_Identity::System_SSH_Agent_Identity","doc":"PHP4 compatible Default Constructor."},
        {"type":"Method","fromName":"System_SSH_Agent_Identity","fromLink":"System_SSH_Agent_Identity.html","link":"System_SSH_Agent_Identity.html#method_setPublicKey","name":"System_SSH_Agent_Identity::setPublicKey","doc":"Set Public Key"},
        {"type":"Method","fromName":"System_SSH_Agent_Identity","fromLink":"System_SSH_Agent_Identity.html","link":"System_SSH_Agent_Identity.html#method_setPublicKeyBlob","name":"System_SSH_Agent_Identity::setPublicKeyBlob","doc":"Set Public Key"},
        {"type":"Method","fromName":"System_SSH_Agent_Identity","fromLink":"System_SSH_Agent_Identity.html","link":"System_SSH_Agent_Identity.html#method_getPublicKey","name":"System_SSH_Agent_Identity::getPublicKey","doc":"Get Public Key"},
        {"type":"Method","fromName":"System_SSH_Agent_Identity","fromLink":"System_SSH_Agent_Identity.html","link":"System_SSH_Agent_Identity.html#method_setSignatureMode","name":"System_SSH_Agent_Identity::setSignatureMode","doc":"Set Signature Mode"},
        {"type":"Method","fromName":"System_SSH_Agent_Identity","fromLink":"System_SSH_Agent_Identity.html","link":"System_SSH_Agent_Identity.html#method_setHash","name":"System_SSH_Agent_Identity::setHash","doc":"Set Hash"},
        {"type":"Method","fromName":"System_SSH_Agent_Identity","fromLink":"System_SSH_Agent_Identity.html","link":"System_SSH_Agent_Identity.html#method_sign","name":"System_SSH_Agent_Identity::sign","doc":"Create a signature"},
        {"type":"Method","fromName":"System_SSH_Agent_Identity","fromLink":"System_SSH_Agent_Identity.html","link":"System_SSH_Agent_Identity.html#method__string_shift","name":"System_SSH_Agent_Identity::_string_shift","doc":"String Shift"},
            
                                // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Doctum = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Doctum.injectApiTree($('#api-tree'));
    });

    return root.Doctum;
})(window);

$(function() {

        // Enable the version switcher
    $('#version-switcher').on('change', function() {
        window.location = $(this).val()
    });
    var versionSwitcher = document.getElementById('version-switcher');
    if (versionSwitcher) {
        var versionToSelect = document.evaluate(
            '//option[@data-version="1.0"]',
            versionSwitcher,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null
        ).singleNodeValue;

        if (versionToSelect && typeof versionToSelect.selected === 'boolean') {
            versionToSelect.selected = true;
        }
    }
    
    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').on('click', function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Doctum.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


